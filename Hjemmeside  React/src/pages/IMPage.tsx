import { useState } from "react";
import Navbar from "../components/UI/Navbar";

const IMPage = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <div>
    <Navbar />
    <div className="brodtekst">
      <h1>1IM</h1>
      <img src="/img/matrix.jpg" width="40%" alt="Grønne bokstaver skrevet vertikalt fra filmen the Matrix." />
      <br />
      Bildekilde:{" "}
      <a href="https://www.indiewire.com/features/general/the-matrix-code-digital-rain-meaning-1201891684/" target="_blank" rel="noopener noreferrer">
        indieWire
      </a>
      <h2>HTML:</h2>
      <p>
        HTML-filen (index.html) Inneholder strukturen til nettsiden din.
        <br />
        Vi bruker <code>&lt;link&gt;</code>-taggen for å koble til det eksterne CSS-dokumentet (styles.css).
        <br />
        CSS-filen (styles.css) inneholder stilene som brukes for å formatere HTML-elementene.
        <br />
        Definerer farger, skrifttyper, marginer, padding, og andre stilrelaterte egenskaper.
        <br />
        Du kan tilpasse innholdet og stilene etter dine egne preferanser.
        <br />
        Lykke til med nettsiden din! 🚀 Hvis du har flere spørsmål eller trenger mer hjelp, bare si ifra!
        <br />
        Kilde:{" "}
        <a href="https://copilot.microsoft.com/" target="_blank" rel="noopener noreferrer">
          copilot
        </a>
      </p>
      <br />
      <p>
        Svar på denne spørreundersøkelsen, og legg merke til at du må klikke <br />
        next et par ganger for å få muligheten til å legge igjen en kommentar:
      </p>
      <iframe
        className="qp_iframe"
        src="https://poll-maker.com/frame5496499x996e448c-163"
        style={{ border: 0, background: "transparent", maxWidth: 500, height: 550 }}
        frameBorder={0}
        seamless
        title="SuperSurvey"
      ></iframe>
      <div id="qp_foot5496499" style={{ width: "100%", maxWidth: 600, padding: 2 }}>
        Created with <a href="https://www.supersurvey.com">SuperSurvey</a>
      </div>
      <br />

      <div
        className="popup"
        onClick={() => setPopupOpen((v) => !v)}
        style={{ display: "inline-block", cursor: "pointer", textDecoration: "underline dotted" }}
      >
        Ordforklaring (klikk for å veksle)
        <span
          className={`popuptext${popupOpen ? " show" : ""}`}
          style={{
            visibility: popupOpen ? "visible" : "hidden",
            width: 300,
            backgroundColor: "#86ff86",
            color: "#3b0000",
            textAlign: "center",
            borderRadius: 6,
            border: "2px solid black",
            boxShadow: "2px 4px 16px rgba(0,0,0,0.25)",
            padding: "8px 0",
            position: "absolute",
            zIndex: 4,
            bottom: "125%",
            left: "50%",
            marginLeft: -80,
          }}
        >
          Dette er en popup laget med javascript <br />
        </span>
      </div>
      <span>
        {" "}
        Kilde (popup):{" "}
        <a href="https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp" target="_blank" rel="noopener noreferrer">
          w3schools
        </a>
      </span>
      <br />
      <h3>
        <a
          href="https://www.loom.com/share/c7fe372af6a946ddac0de4b9d2be1d5c?sid=35a050c2-3999-4327-bcaf-4d08a4ff6692"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klikk her for ukas læringsvideo.
        </a>
      </h3>
      HTML og CSS
      <br />
      <img src="/img/video.JPG" width="220" alt="Loom video" />
      <br />
      Kilde / videoverktøy:{" "}
      <a href="https://www.loom.com/" target="_blank" rel="noopener noreferrer">
        LOOM
      </a>
      <br />
    </div>
    </div>
  );
};

export default IMPage;