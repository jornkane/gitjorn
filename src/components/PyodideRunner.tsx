import React, { useState, useRef } from "react";

const pyodideUrl = "https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js";

const PyodideRunner: React.FC = () => {
  const [pyodide, setPyodide] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState("");
  const [lib, setLib] = useState("");
  const [libStatus, setLibStatus] = useState("");
  const codeRef = useRef<HTMLTextAreaElement>(null);

  // Last inn Pyodide kun én gang
  React.useEffect(() => {
    if (!pyodide) {
      setLoading(true);
      const script = document.createElement("script");
      script.src = pyodideUrl;
      script.onload = async () => {
        // @ts-ignore
        const pyodideInstance = await (window as any).loadPyodide();
        setPyodide(pyodideInstance);
        setLoading(false);
      };
      document.body.appendChild(script);
    }
  }, [pyodide]);

  const handleLoadLib = async () => {
    if (!pyodide) return;
    if (!lib.trim()) {
      setLibStatus("Skriv inn et biblioteknavn!");
      return;
    }
    setLibStatus("Laster inn...");
    try {
      await pyodide.loadPackage(lib.trim());
      setLibStatus(`Biblioteket '${lib}' er klart!`);
    } catch {
      setLibStatus(`Kunne ikke laste '${lib}'`);
    }
  };

  const handleRun = async () => {
    if (!pyodide) return;
    setOutput("Kjører...");
    let stdout = "";
    let stderr = "";
    pyodide.setStdout({ batched: (s: string) => { stdout += s; } });
    pyodide.setStderr({ batched: (s: string) => { stderr += s; } });
    try {
      const code = codeRef.current?.value || "";
      const result = await pyodide.runPythonAsync(code);
      let outputText = stdout.trim();
      if (result !== undefined && result !== null && result !== "") {
        if (outputText) outputText += "\n";
        outputText += result;
      }
      if (!outputText.trim()) outputText = "(ingen output)";
      if (stderr.trim()) outputText += `\nFeil:\n${stderr}`;
      setOutput(outputText);
    } catch (err: any) {
      setOutput(err.toString());
    } finally {
      pyodide.setStdout({ batched: (s: string) => {} });
      pyodide.setStderr({ batched: (s: string) => {} });
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto", background: "#333", padding: 20, borderRadius: 8, color: "#fff" }}>
      <h2>Kjør Python-kode i nettleseren (Pyodide)</h2>
      <label htmlFor="pyodide-lib">Last inn ekstra bibliotek (f.eks. numpy, matplotlib):</label><br />
      <input
        type="text"
        id="pyodide-lib"
        value={lib}
        onChange={e => setLib(e.target.value)}
        placeholder="Skriv biblioteknavn, f.eks. numpy"
        style={{ marginRight: 8 }}
      />
      <button onClick={handleLoadLib} disabled={loading || !pyodide}>Last inn bibliotek</button>
      <span style={{ marginLeft: 10, color: libStatus.includes("ikke") ? "red" : "lightgreen" }}>{libStatus}</span>
      <br /><br />
      <textarea ref={codeRef} placeholder="Skriv din Python-kode her..." style={{ width: "100%", height: 150, fontSize: "1em" }} />
      <br />
      <button onClick={handleRun} disabled={loading || !pyodide}>Kjør kode</button>
      <h3>Output:</h3>
      <pre style={{ background: "#111", color: "#0f0", padding: 10, minHeight: 60 }}>{output}</pre>
      {loading && <div>Laster inn Pyodide...</div>}
    </div>
  );
};

export default PyodideRunner;
