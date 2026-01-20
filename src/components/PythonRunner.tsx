import { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

// Pyodide is loaded via CDN script tag in index.html
// @ts-ignore
declare const loadPyodide: any;

interface PyodideInterface {
  runPythonAsync: (code: string) => Promise<any>;
  setStdout: (options: { batched: (text: string) => void }) => void;
  loadPackage: (packages: string[]) => Promise<void>;
}

interface PythonRunnerProps {
  initialCode?: string;
  title?: string;
  defaultLibraries?: string[];
}

const AVAILABLE_LIBRARIES = [
  { id: "numpy", name: "NumPy", description: "Matematikk og arrays" },
  { id: "pandas", name: "Pandas", description: "Dataanalyse" },
  { id: "matplotlib", name: "Matplotlib", description: "Plotting" },
  { id: "scipy", name: "SciPy", description: "Vitenskapelige beregninger" },
  { id: "scikit-learn", name: "Scikit-learn", description: "Maskinlæring" },
  { id: "seaborn", name: "Seaborn", description: "Statistisk visualisering" },
  { id: "sympy", name: "SymPy", description: "Symbolsk matematikk" },
];

const PythonRunner: React.FC<PythonRunnerProps> = ({ 
  initialCode = "", 
  title = "🐍 Python Kodeeditor",
  defaultLibraries = []
}) => {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [plotImage, setPlotImage] = useState<string | null>(null);
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [activeLibraries, setActiveLibraries] = useState<Set<string>>(new Set(defaultLibraries));
  const [loadingLibraries, setLoadingLibraries] = useState<Set<string>>(new Set());

  // Update code if initialCode changes
  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  // Load Pyodide on component mount
  useEffect(() => {
    const initializePyodide = async () => {
      try {
        setOutput("Laster Python-motor...");

        if (typeof loadPyodide === "undefined") {
          throw new Error("Pyodide CDN ikke lastet.");
        }

        const pyInstance = await loadPyodide();
        // Helper function to handle input() via window.prompt
        await pyInstance.runPythonAsync(`
import js
import builtins

def input(prompt=""):
    val = js.prompt(prompt)
    if val is None:
        return ""
    return str(val)

builtins.input = input
        `);

        setPyodide(pyInstance);
        
        // Load default libraries if any
        if (defaultLibraries.length > 0) {
          setOutput(`Laster standardbiblioteker: ${defaultLibraries.join(", ")}...`);
          await pyInstance.loadPackage(defaultLibraries);
        }

        setOutput("Python er klar! Velg biblioteker eller skriv kode.");
        setLoading(false);
      } catch (error) {
        setOutput(`Feil ved lasting av Python: ${error}`);
        setLoading(false);
      }
    };

    setTimeout(initializePyodide, 100);
  }, []);

  const toggleLibrary = async (libId: string) => {
    if (!pyodide) return;
    
    // If already active, we can't "unload" in Pyodide easily, but we can visually toggle it off
    // However, for simplicity and correctness, let's keep it "Active" once loaded
    if (activeLibraries.has(libId)) {
       // Optional: Allow visual "unchecking" but warn user it's still in memory? 
       // For now, let's just ignore or allow toggling active state for filter purposes only.
       // Better UX: Once loaded, it stays loaded.
       return; 
    }

    try {
      setLoadingLibraries(prev => new Set(prev).add(libId));
      setOutput(`Laster bibliotek: ${libId}...`);
      
      await pyodide.loadPackage([libId]);
      
      setActiveLibraries(prev => new Set(prev).add(libId));
      setOutput(`Bibliotek '${libId}' lastet og klart!`);
    } catch (error) {
      setOutput(`Feil ved lasting av ${libId}: ${error}`);
    } finally {
      setLoadingLibraries(prev => {
        const next = new Set(prev);
        next.delete(libId);
        return next;
      });
    }
  };

  // Run Python code
  const runCode = async () => {
    if (!pyodide) {
      setOutput("Python er ikke lastet ennå.");
      return;
    }

    if (!code.trim()) {
      setOutput("Skriv noe Python-kode først!");
      return;
    }

    setRunning(true);
    setOutput("Kjører...");
    setPlotImage(null);

    try {
      let outputText = "";
      pyodide.setStdout({
        batched: (text: string) => {
          outputText += text + "\n";
        },
      });

      
      // Patch input() and setup matplotlib backend
      const setupCode = `
import js
import builtins
import sys

# Patch input
def input(prompt=""):
    val = js.prompt(prompt)
    if val is None:
        return ""
    return str(val)
builtins.input = input

# Patch matplotlib to non-interactive Agg backend to prevent
# default Pyodide backend from appending to document body
try:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    # Ensure show() does nothing just in case
    plt.show = lambda *args, **kwargs: None
except ImportError:
    pass
`;
      const fullCode = setupCode + "\n" + code;
      const result = await pyodide.runPythonAsync(fullCode);

      // Check for plots (Matplotlib/Seaborn)
      // Only check if matplotlib is likely used
      if (activeLibraries.has('matplotlib') || activeLibraries.has('seaborn') || code.includes('plt.') || code.includes('matplotlib')) {
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
            // We need to make sure activeLibraries actually loaded matplotlib for this to work safely, 
            // but runPythonAsync might autoload packages if Pyodide is configured that way (it often is NOT by default).
            // We assume user loaded libraries via buttons.
            const plotBase64 = await pyodide.runPythonAsync(plotCode);
            if (plotBase64) {
              setPlotImage(`data:image/png;base64,${plotBase64}`);
            }
          } catch (e) {
             // Ignore plot errors
          }
      }

      let finalOutput = outputText;
      if (result !== undefined && result !== null) {
        finalOutput += `\nResultat: ${result}`;
      }

      setOutput(finalOutput || "(ingen output)");
    } catch (error: any) {
      setOutput(`❌ Feil:\n${error.message || error}`);
    } finally {
      setRunning(false);
    }
  };

  const clearAll = () => {
    setCode(initialCode || "");
    setOutput("Klar til dyst!");
    setPlotImage(null);
  };

  const loadExample = async (example: any) => {
    setCode(example.code);
    setOutput("Eksempel lastet!");
    setPlotImage(null);
    
    // Auto-load required libraries for example
    if (example.requiredLibs) {
      for (const lib of example.requiredLibs) {
        if (!activeLibraries.has(lib)) {
          await toggleLibrary(lib);
        }
      }
    }
  };

  const examples = [
    {
      name: "Hei Verden",
      code: 'print("Hei, verden!")\nprint("Velkommen til Python!")',
      requiredLibs: []
    },
    {
      name: "Løkke",
      code: "# For-løkke\nfor i in range(1, 6):\n    print(f'Tall: {i}')",
      requiredLibs: []
    },
    {
      name: "NumPy",
      requiredLibs: ["numpy"],
      code: `import numpy as np

arr = np.array([1, 2, 3, 4, 5])
print(f"Original: {arr}")
print(f"Ganget med 2: {arr * 2}")
print(f"Gjennomsnitt: {np.mean(arr)}")`,
    },
    {
      name: "Pandas",
      requiredLibs: ["pandas"],
      code: `import pandas as pd

data = {
    'Navn': ['Ola', 'Kari', 'Per'],
    'Alder': [25, 30, 35],
    'By': ['Oslo', 'Bergen', 'Trondheim']
}
df = pd.DataFrame(data)
print(df)
print("\\nStatistikk:\\n", df['Alder'].describe())`,
    },
    {
      name: "Plotting",
      requiredLibs: ["matplotlib", "numpy"],
      code: `import matplotlib.pyplot as plt
import numpy as np

x = np.linspace(0, 10, 100)
y = np.sin(x)

plt.figure()
plt.plot(x, y)
plt.title("Sinus-kurve")
plt.xlabel("x")
plt.grid(True)
plt.show()`,
    },
    {
      name: "Seaborn",
      requiredLibs: ["seaborn", "pandas", "matplotlib", "numpy"],
      code: `import seaborn as sns
import matplotlib.pyplot as plt
import pandas as pd
import numpy as np

data = pd.DataFrame({
    'x': np.random.randn(100),
    'y': np.random.randn(100),
    'cat': np.random.choice(['A', 'B'], 100)
})

sns.set_theme(style="darkgrid")
plt.figure(figsize=(6, 4))
sns.scatterplot(data=data, x='x', y='y', hue='cat')
plt.title("Seaborn Scatter")
plt.show()`,
    },
  ];

  return (
    <div className="bg-linear-to-br from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          {title}
        </h2>
        {loading && (
          <span className="text-yellow-400 animate-pulse font-mono">Laster Python...</span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* Left Sidebar: Libraries & Examples */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Libraries Section */}
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Biblioteker
            </h3>
            <div className="space-y-2">
              {AVAILABLE_LIBRARIES.map((lib) => {
                const isActive = activeLibraries.has(lib.id);
                const isLoading = loadingLibraries.has(lib.id);
                
                return (
                  <div key={lib.id} className="flex items-center justify-between group">
                    <label className={`flex items-center space-x-2 cursor-pointer ${isActive ? 'text-green-400' : 'text-gray-400 group-hover:text-white'}`}>
                       <div 
                         onClick={() => !isActive && !isLoading && toggleLibrary(lib.id)}
                         className={`w-4 h-4 rounded border flex items-center justify-center transition-colors
                           ${isActive ? 'bg-green-500 border-green-500' : 'border-gray-500 hover:border-white'}
                         `}
                       >
                         {isActive && <span className="text-white text-xs">✓</span>}
                       </div>
                       <span className="text-sm">{lib.name}</span>
                    </label>
                    {isLoading && <span className="text-xs text-yellow-400 animate-pulse">Wait...</span>}
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 mt-2 italic">
              Klikk for å aktivere. Kan ikke deaktiveres uten å laste siden på nytt.
            </p>
          </div>

          {/* Examples Section */}
           <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Eksempler
            </h3>
            <div className="flex flex-col gap-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => loadExample(example)}
                  disabled={loading}
                  className="text-left text-sm px-3 py-2 rounded bg-gray-600 hover:bg-purple-600 transition-colors disabled:opacity-50"
                >
                  {example.name}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Right Content: Editor & Output */}
        <div className="lg:col-span-3">
           {/* Code editor */}
          <div className="rounded-lg overflow-hidden border border-gray-700 shadow-inner mb-4 relative">
            <Editor
              height="500px"
              defaultLanguage="python"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                scrollBeyondLastLine: false,
                automaticLayout: true,
                padding: { top: 16, bottom: 16 },
              }}
              loading={<div className="text-gray-400 p-4">Laster editor...</div>}
            />
            {loadingLibraries.size > 0 && (
                <div className="absolute bottom-2 right-2 bg-black/80 text-yellow-400 px-3 py-1 rounded-full text-xs animate-pulse">
                    Laster: {Array.from(loadingLibraries).join(", ")}...
                </div>
            )}
          </div>

          <div className="flex gap-2 mb-4">
            <button
              onClick={runCode}
              disabled={loading || running || loadingLibraries.size > 0}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-lg"
            >
              {running ? "⏳ Kjører..." : "▶️ Kjør kode"}
            </button>
            <button
              onClick={clearAll}
              disabled={loading}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors shadow-lg"
            >
              🗑️ Tøm
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-950 rounded-lg border border-gray-700 p-4 min-h-[150px] shadow-inner">
              <h3 className="text-xs font-bold text-gray-500 uppercase mb-2">
                Output
              </h3>
              <pre className="text-green-400 whitespace-pre-wrap font-mono text-sm overflow-x-auto max-h-[300px] overflow-y-auto">
                {output || "..."}
              </pre>
            </div>

            {plotImage && (
              <div className="bg-white rounded-lg border border-gray-700 p-2 flex flex-col items-center justify-center min-h-[150px] relative group shadow-inner">
                <img
                  src={plotImage}
                  alt="Generated plot"
                  className="max-w-full h-auto rounded"
                />
                <button
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = plotImage;
                    link.download = "python-plot.png";
                    link.click();
                  }}
                  className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md transition-all opacity-0 group-hover:opacity-100 absolute bottom-4"
                >
                  📥 Last ned bilde
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonRunner;

