import Navbar from "../components/Navbar";
import { useState } from "react";

const IMPage = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">1IM</h1>

        <div className="mb-8">
          <img
            src="/img/matrix.jpg"
            className="w-2/5 rounded-lg shadow-lg"
            alt="Grønne bokstaver skrevet vertikalt fra filmen the Matrix."
          />
          <p className="text-sm mt-2">
            Bildekilde:{" "}
            <a
              href="https://www.indiewire.com/features/general/the-matrix-code-digital-rain-meaning-1201891684/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline"
            >
              indieWire
            </a>
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-4">HTML:</h2>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-xl">
          <p className="mb-2">
            HTML-filen (index.html) Inneholder strukturen til nettsiden din.
          </p>
          <p className="mb-2">
            Vi bruker &lt;link&gt;-taggen for å koble til det eksterne
            CSS-dokumentet (styles.css).
          </p>
          <p className="mb-2">
            CSS-filen (styles.css) inneholder stilene som brukes for å formatere
            HTML-elementene.
          </p>
          <p className="mb-2">
            Definerer farger, skrifttyper, marginer, padding, og andre
            stilrelaterte egenskaper.
          </p>
          <p className="mb-2">
            Du kan tilpasse innholdet og stilene etter dine egne preferanser.
          </p>
          <p className="mb-2">
            Lykke til med nettsiden din! 🚀 Hvis du har flere spørsmål eller
            trenger mer hjelp, bare si ifra!
          </p>
          <p className="text-sm">
            Kilde:{" "}
            <a
              href="https://copilot.microsoft.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline"
            >
              copilot
            </a>
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-4">
            Svar på denne spørreundersøkelsen, og legg merke til at du må klikke{" "}
            <br />
            next et par ganger for å få muligheten til å legge igjen en
            kommentar:
          </p>

          <iframe
            className="qp_iframe rounded-lg shadow-lg"
            src="https://poll-maker.com/frame5496499x996e448c-163"
            frameBorder="0"
            style={{
              border: 0,
              background: "transparent",
              maxWidth: "500px",
              height: "550px",
            }}
          ></iframe>

          <div className="text-sm mt-2">
            Created with{" "}
            <a
              href="https://www.supersurvey.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline"
            >
              SuperSurvey
            </a>
          </div>
        </div>
        <div className="mb-6">
          <div className="relative inline-block">
            <span
              onClick={togglePopup}
              className="cursor-pointer underline decoration-dotted select-none hover:text-blue-300 transition-colors"
            >
              Ordforklaring (klikk for å veksle)
            </span>
            {showPopup && (
              <span className="absolute z-10 bottom-full left-1/2 -translate-x-1/2 mb-2 w-[300px] bg-[#86ff86] text-[#3b0000] text-center rounded-md border-2 border-black shadow-lg px-2 py-2 animate-fadeIn">
                Dette er en popup laget med javascript
              </span>
            )}
          </div>
          <p className="text-sm mt-2">
            Kilde (popup):{" "}
            <a
              href="https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline"
            >
              w3schools
            </a>
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">
            <a
              href="https://www.loom.com/share/c7fe372af6a946ddac0de4b9d2be1d5c?sid=35a050c2-3999-4327-bcaf-4d08a4ff6692"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline"
            >
              Klikk her for ukas læringsvideo.
            </a>
          </h3>
          <p className="mb-2">HTML og CSS</p>
          <a
            href="https://www.loom.com/share/c7fe372af6a946ddac0de4b9d2be1d5c?sid=35a050c2-3999-4327-bcaf-4d08a4ff6692"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/img/video.JPG"
              className="w-[220px] rounded-lg shadow-lg hover:opacity-80 transition-opacity"
              alt="Video thumbnail"
            />
          </a>
          <p className="text-sm mt-2">
            Kilde / videoverktøy:{" "}
            <a
              href="https://www.loom.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline"
            >
              LOOM
            </a>
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-xl">
          <p className="mb-4">Her er eksempler på css-kode du kan bruke:</p>
          <p className="mb-2">
            I menyen på denne websiten har jeg brukt bl.a. word-spacing: 1rem;
          </p>
          <p className="mb-2">
            (rem - relativ til gjeldende fontstørrelse. 1 er samme, 2 blir da
            dobbelt osv.)
          </p>
          <p className="mb-2">
            "the rem unit is only relative to the document's root element,
          </p>
          <p className="mb-2">
            while the em unit is only relative to the immediate parent of the
            targeted element"
          </p>
        </div>

        <div className="mb-6">
          <p className="mb-4">
            Her har vi eksempel på html-kode for å sette opp en hjemmeside:
          </p>
          <img
            src="/img/htmlkode.JPG"
            className="w-3/5 rounded-lg shadow-lg mb-4"
            alt="HTML code example"
          />
          <p className="text-sm mb-4">
            (det er mulig å vise html-kode som tekst på en html-side, men det er
            litt mye arbeid)
          </p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-xl">
          <pre className="text-green-400 overflow-x-auto text-sm">
            {`body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
}

header {
    background-color: #333;
    color: white;
    padding: 1em 0;
    text-align: center;
}

main {
    padding: 2em;
}

h1, h2 {
    color: #333;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    background-color: #fff;
    margin: 0.5em 0;
    padding: 0.5em;
    border: 1px solid #ddd;
}

footer {
    background-color: #333;
    color: white;
    text-align: center;
    padding: 1em 0;
    position: fixed;
    width: 100%;
    bottom: 0;
}`}
          </pre>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-xl">
          <p className="mb-4">
            Slik kan du feste et element på sida med nøyaktige "koordinater":
          </p>
          <pre className="text-green-400 bg-gray-900/80 rounded-lg p-4 overflow-x-auto text-sm">
            {`div.fixed {  /* brukes med taggen: div class="fixed" */
    position: fixed;
    top: 1pt;
    left: 1pt;
    width: 60%;
    border: 3px solid #73AD21;
}`}
          </pre>
        </div>

        <div className="mb-6">
          <p className="mb-2">Klikk her for</p>
          <a
            href="https://stackoverflow.com/questions/46463820/visual-studio-code-disable-auto-closing-tags"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-300 hover:text-blue-100 underline"
          >
            forklaring på hvordan du fjerner auto closing tags i VSCode
          </a>
        </div>
      </main>
    </div>
  );
};

export default IMPage;
