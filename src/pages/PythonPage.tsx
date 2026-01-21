import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import PythonRunner from "../components/PythonRunner";

const PythonPage: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="grow p-8 max-w-6xl mx-auto w-full">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-shadow-lg">
            Python Playground 🐍
          </h1>
          <p className="text-xl text-gray-200">
            Skriv og kjør Python-kode direkte i nettleseren. Test ut idéer, løs
            oppgaver eller bare lek deg!
          </p>
        </header>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1 shadow-2xl">
          <PythonRunner title="Interaktiv Python Editor" />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300">
              Hvordan bruke editoren?
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-200">
              <li>Skriv Python-kode i vinduet til venstre</li>
              <li>
                Trykk på <strong>▶️ Kjør kode</strong> for å se resultatet
              </li>
              <li>Resultatet vises i terminalen til høyre</li>
              <li>Grafer vises automatisk under terminalen</li>
              <li>Bruk eksemplene for å komme raskt i gang</li>
            </ul>
          </div>

          <div className="bg-black/30 p-6 rounded-lg backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-yellow-300">
              Tilgjengelige biblioteker
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-200">
              <li>
                <strong>NumPy</strong> - For avansert matematikk og
                array-operasjoner
              </li>
              <li>
                <strong>Pandas</strong> - For dataanalyse og manipulasjon
              </li>
              <li>
                <strong>Matplotlib</strong> - For å lage grafer og
                visualiseringer
              </li>
              <li>
                <strong>SciPy</strong> - For vitenskapelige beregninger
              </li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PythonPage;
