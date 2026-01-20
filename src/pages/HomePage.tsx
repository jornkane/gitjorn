
import "../css/HomePage.css";
import Navbar from "../components/UI/Navbar";

const HomePage = () => (
  <div id="bgbilde">
    <Navbar />
    <h1>Velkommen til Jørn Kanestrøms Skolehjemmeside</h1>
    <div className="intro-container">
      <img src="/img/jornkane3.jpg" alt="Jørn Kanestrøm" width="200px" className="intro-bilde" />
      <div className="brodtekst">
        Velg klasse og fag i menyen over og se om du finner det du leter etter
        <br />Tips og linker til tutorials som inngår i faget utvikling på vg1 og vg2 informasjonsteknologi og medieproduksjon blir å finne her.
        <br />Programmering og webutvikling:
        <br />Web: Html, css og litt JavaScript. Programmering: først og fremst Python, en del JavaScript og eventuelt C# eller C++.
        <br />Det kan hende det kommer litt stoff om databaser også -&gt; SQL og MsAccess
        <br />Siden oppdateres etter behov (eller når Jørn tester ut ting)
        <br />
        <br /><b>Sist oppdatert:</b>
        <h3>08.12.25</h3>
        Filmer kultur.html
      </div>
    </div>
    <br /><br />
    <div className="brodtekst">
      La til ny og forbedret brukerundersøkelse om AI:
      <br />
      <iframe
        width="640px"
        height="480px"
        src="https://forms.office.com/e/gsiGNct7pK?embed=true"
        frameBorder={0}
        marginWidth={0}
        marginHeight={0}
        style={{ border: "none", maxWidth: "100%", maxHeight: "100vh" }}
        allowFullScreen
        title="AI-undersøkelse"
      ></iframe>
      <br /><br />
      Jeg ønsker å ha hvit tekst, og skygge på teksten slik at den vises mot bakgrunnen, men bakgrunnsbildet (selv om det er fint) ble for fremtredende. Derfor har jeg nå endret koden til å bruke en linear-gradient med RGBA verdier som legger et halvgjennomsiktig hvitt lag over bakgrunnsbildet. Dette vil kun påvirke bakgrunnsbildet og ikke teksten i elementet.
      Hvis du ønsker en annen type gjennomsiktighet eller farge, kan vi justere RGBA-verdiene. For eksempel:
      <br />For mørkere overlay: rgba(0, 0, 0, 0.5)
      <br />For lysere overlay: rgba(255, 255, 255, 0.5)
      <br />For mer eller mindre gjennomsiktighet, juster den siste verdien (0.5) opp eller ned (0 er helt gjennomsiktig, 1 er helt ugjennomsiktig)
      <br /><br />
      P.S. for de som ønsker å lære programmering er det faktisk nødvendig å skru av AI i VS-Code.
      <br />Den har nå blitt så påtrengende at den hele tia fullfører nye setninger for deg, det blir for meget.
      <br />
      <img src="/img/disableAI.jpg" width="700" alt="Disable AI" />
      <br />
      <ul className="uliste">
        <li>Bakgrunnsbilde er Ai-generert. Futuristisk steam punk by, laget med bildeskaper i Bing, levert av Dall E 3</li>
        <li>
          <a href="https://www.bing.com/images/create?FORM=IRPGEN" target="_blank" rel="noopener noreferrer">
            Bildeskaper
          </a>
        </li>
      </ul>
      <footer>
        <p>
          Version 1.5
          <br />Copyright 2025 Jørn Kanestrøm, Kane Computing. Alle rettigheter reservert.
        </p>
      </footer>
    </div>
  </div>
);

export default HomePage;
