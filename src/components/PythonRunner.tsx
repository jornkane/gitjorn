import { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";

import { usePython } from "../context/PythonContext";

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
  { id: "networkx", name: "NetworkX", description: "Nettverksanalyse" },
  { id: "pillow", name: "Pillow", description: "Bildebehandling" },
];

const STANDARD_LIBRARIES = [
  { id: "os", name: "os", description: "Operativsystem-funksjoner" },
  { id: "random", name: "random", description: "Tilfeldige tall" },
  { id: "math", name: "math", description: "Matematiske funksjoner" },
  { id: "datetime", name: "datetime", description: "Dato og tid" },
  { id: "json", name: "json", description: "JSON-håndtering" },
];

const PythonRunner: React.FC<PythonRunnerProps> = ({
  initialCode = "",
  title = "🐍 Python Kodeeditor",
  defaultLibraries = [],
}) => {
  const {
    runPython,
    isLoading: engineLoading,
    loadLibrary,
    activeLibraries,
    loadingLibraries,
  } = usePython();

  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState("");
  const [plotImage, setPlotImage] = useState<string | null>(null);
  const [running, setRunning] = useState(false);
  useEffect(() => {
    const loadDefaults = async () => {
      for (const lib of defaultLibraries) {
        if (!activeLibraries.has(lib)) {
          await loadLibrary(lib);
        }
      }
    };
    if (!engineLoading) {
      loadDefaults();
    }
  }, [engineLoading, defaultLibraries, activeLibraries, loadLibrary]);

  useEffect(() => {
    if (initialCode) {
      setCode(initialCode);
    }
  }, [initialCode]);

  const toggleLibrary = async (libId: string) => {
    if (activeLibraries.has(libId)) return;

    try {
      setOutput(`Laster bibliotek: ${libId}...`);
      await loadLibrary(libId);
      setOutput(`Bibliotek '${libId}' lastet og klart!`);
    } catch (error) {
      setOutput(`Feil ved lasting av ${libId}: ${error}`);
    }
  };

  const runCode = async () => {
    if (engineLoading) {
      setOutput("Vent litt, Python starter...");
      return;
    }

    if (!code.trim()) {
      setOutput("Skriv noe Python-kode først!");
      return;
    }

    setRunning(true);
    setOutput("Kjører...");
    setPlotImage(null);

    let currentOutput = "";
    const handleStdout = (text: string) => {
      currentOutput += text + "\n";
    };

    const {
      result,
      error,
      plotImage: generatedPlot,
    } = await runPython(code, handleStdout);

    if (generatedPlot) {
      setPlotImage(generatedPlot);
    }

    let finalOutput = currentOutput;
    if (error) {
      finalOutput += `\n❌ Feil:\n${error}`;
    } else if (result !== undefined && result !== null) {
      finalOutput += `\nResultat: ${result}`;
    }

    setOutput(finalOutput || "(ingen output)");
    setRunning(false);
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
      requiredLibs: [],
    },
    {
      name: "Løkke",
      code: "# For-løkke\nfor i in range(1, 6):\n    print(f'Tall: {i}')",
      requiredLibs: [],
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
    {
      name: "OS & Filer",
      requiredLibs: [],
      code: `import os

print("Nåværende mappe:", os.getcwd())
print("Filer her:", os.listdir())

# Lage en virtuell fil
with open("test.txt", "w") as f:
    f.write("Hei fra en virtuell fil!")

print("Fil laget! Sjekker igjen:", os.listdir())

# Lese filen
with open("test.txt", "r") as f:
    print("Innhold:", f.read())`,
    },
    {
      name: "Random",
      requiredLibs: [],
      code: `import random

print("Tilfeldig tall (0-1):", random.random())
print("Terningkast:", random.randint(1, 6))

valg = ["Stein", "Saks", "Papir"]
print("Datamaskinen valgte:", random.choice(valg))

# Shuffle en liste
kort = ["A", "K", "Q", "J", "10"]
random.shuffle(kort)
print("Stokket kortstokk:", kort)`,
    },
  ];

  return (
    <div className="bg-linear-to-br from-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-2xl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold flex items-center gap-2">{title}</h2>
        {engineLoading && (
          <span className="text-yellow-400 animate-pulse font-mono">
            Laster motor...
          </span>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Biblioteker
            </h3>
            <div className="space-y-2">
              {AVAILABLE_LIBRARIES.map((lib) => {
                const isActive = activeLibraries.has(lib.id);
                const isLoading = loadingLibraries.has(lib.id);

                return (
                  <div
                    key={lib.id}
                    className="flex items-center justify-between group"
                  >
                    <label
                      className={`flex items-center space-x-2 cursor-pointer ${isActive ? "text-green-400" : "text-gray-400 group-hover:text-white"}`}
                    >
                      <div
                        onClick={() =>
                          !isActive && !isLoading && toggleLibrary(lib.id)
                        }
                        className={`w-4 h-4 rounded border flex items-center justify-center transition-colors
                           ${isActive ? "bg-green-500 border-green-500" : "border-gray-500 hover:border-white"}
                         `}
                      >
                        {isActive && (
                          <span className="text-white text-xs">✓</span>
                        )}
                      </div>
                      <span className="text-sm">{lib.name}</span>
                    </label>
                    {isLoading && (
                      <span className="text-xs text-yellow-400 animate-pulse">
                        Wait...
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
            <p className="text-xs text-gray-500 mt-2 italic">
              Klikk for å aktivere. Kan ikke deaktiveres uten å laste siden på
              nytt.
            </p>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Standardbiblioteker
            </h3>
            <div className="flex flex-wrap gap-2">
              {STANDARD_LIBRARIES.map((lib) => (
                <span
                  key={lib.id}
                  className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded border border-gray-500 cursor-help"
                  title={lib.description}
                >
                  {lib.name}
                </span>
              ))}
              <span className="text-xs text-gray-500 px-1 py-1">
                + mange flere
              </span>
            </div>
          </div>
          <div className="bg-gray-700/50 p-4 rounded-lg">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Eksempler
            </h3>
            <div className="flex flex-col gap-2">
              {examples.map((example, index) => (
                <button
                  key={index}
                  onClick={() => loadExample(example)}
                  disabled={engineLoading}
                  className="text-left text-sm px-3 py-2 rounded bg-gray-600 hover:bg-purple-600 transition-colors disabled:opacity-50"
                >
                  {example.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-3">
  
          {/* Kode editor */}
          <div className="rounded-lg overflow-hidden border border-gray-700 shadow-inner mb-4 relative bg-[#2d2d2d] min-h-[500px]">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                highlight(
                  code,
                  languages.python || languages.extend("python", {}),
                  "python"
                )
              }
              padding={16}
              className="font-mono text-sm"
              style={{
                fontFamily: '"Fira Code", "Fira Mono", monospace',
                fontSize: 14,
                backgroundColor: "transparent",
                minHeight: "500px",
              }}
              textareaClassName="focus:outline-none"
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
              disabled={engineLoading || running || loadingLibraries.size > 0}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 shadow-lg"
            >
              {running ? "⏳ Kjører..." : "▶️ Kjør kode"}
            </button>
            <button
              onClick={clearAll}
              disabled={engineLoading}
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
