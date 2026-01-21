import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';

declare const loadPyodide: any;

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<any>;
  setStdout: (options: { batched: (text: string) => void }) => void;
  loadPackage: (packages: string[]) => Promise<void>;
  globals: any;
}

interface PythonContextType {
  runPython: (
    code: string,
    onStdout: (text: string) => void
  ) => Promise<{ result: any; error: string | null }>;
  isLoading: boolean;
  loadLibrary: (libId: string) => Promise<void>;
  activeLibraries: Set<string>;
  loadingLibraries: Set<string>;
}

const PythonContext = createContext<PythonContextType | undefined>(undefined);

export const PythonProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeLibraries, setActiveLibraries] = useState<Set<string>>(
    new Set()
  );
  const [loadingLibraries, setLoadingLibraries] = useState<Set<string>>(
    new Set()
  );

  // Ref to track initialization to prevent double-loading in StrictMode
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const initializePyodide = async () => {
      try {
        console.log('Initializing Pyodide...');
        if (typeof loadPyodide === 'undefined') {
          throw new Error('Pyodide CDN ikke lastet.');
        }

        const pyInstance = await loadPyodide();

        // Patch input and basic setup
        await pyInstance.runPythonAsync(`
import js
import builtins
import sys

def input(prompt=""):
    val = js.prompt(prompt)
    if val is None:
        return ""
    return str(val)

builtins.input = input

# Patch matplotlib backend globally
try:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    plt.show = lambda *args, **kwargs: None
except ImportError:
    pass
        `);

        setPyodide(pyInstance);
        setIsLoading(false);
        console.log('Pyodide ready.');
      } catch (error) {
        console.error('Failed to load Pyodide:', error);
        setIsLoading(false);
      }
    };

    setTimeout(initializePyodide, 0);
  }, []);

  const loadLibrary = async (libId: string) => {
    if (!pyodide) return;
    if (activeLibraries.has(libId)) return;

    try {
      setLoadingLibraries((prev) => new Set(prev).add(libId));
      await pyodide.loadPackage([libId]);
      setActiveLibraries((prev) => new Set(prev).add(libId));
    } catch (error) {
      console.error(`Failed to load ${libId}:`, error);
      throw error;
    } finally {
      setLoadingLibraries((prev) => {
        const next = new Set(prev);
        next.delete(libId);
        return next;
      });
    }
  };

  const runPython = async (code: string, onStdout: (text: string) => void) => {
    if (!pyodide) return { result: null, error: 'Python er ikke lastet ennå.' };

    try {
      pyodide.setStdout({
        batched: (text: string) => {
          onStdout(text);
        },
      });

      // Special handling for plotting if matplotlib is active
      const hasPlotting =
        activeLibraries.has('matplotlib') ||
        activeLibraries.has('seaborn') ||
        code.includes('plt.') ||
        code.includes('matplotlib');

      const result = await pyodide.runPythonAsync(code);

      let plotImage = null;
      if (hasPlotting) {
        try {
          const plotCode = `
import matplotlib.pyplot as plt
import io, base64

def _get_plot_img():
    if plt.get_fignums():
        img = io.BytesIO()
        plt.savefig(img, format='png', bbox_inches='tight')
        img.seek(0)
        plt.close('all')
        return base64.b64encode(img.read()).decode()
    return None

_get_plot_img()
`;
          const plotBase64 = await pyodide.runPythonAsync(plotCode);
          if (plotBase64) {
            plotImage = `data:image/png;base64,${plotBase64}`;
          }
        } catch (e) {
          // Ignore plotting errors if matplotlib misuse
        }
      }

      return { result, error: null, plotImage };
    } catch (error: any) {
      return { result: null, error: error.message || String(error) };
    }
  };

  return (
    <PythonContext.Provider
      value={{
        runPython,
        isLoading,
        loadLibrary,
        activeLibraries,
        loadingLibraries,
      }}
    >
      {children}
    </PythonContext.Provider>
  );
};

export const usePython = () => {
  const context = useContext(PythonContext);
  if (context === undefined) {
    throw new Error('usePython must be used within a PythonProvider');
  }
  return context;
};
