import Navbar from "../components/UI/Navbar";

const HomePage = () => (
  <div
    id="bgbilde"
    className="
      fixed inset-0 w-screen h-screen
      flex flex-col items-start
      overflow-auto
      bg-[linear-gradient(#00735c,rgba(177,245,6,0.5)),url('/img/futuristiskSteamPunkByStreetview.jfif')]
      bg-no-repeat bg-cover bg-fixed
    "
  >
    <Navbar />

    <h1 className="ml-[1%] mt-2 mb-0 text-white text-shadow-lg font-[Candara,Calibri,Segoe,Segoe_UI,Optima,sans-serif]">
      Velkommen til Jørn Kanestrøms Skolehjemmeside
    </h1>

    {/* Intro */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-5 mt-4 mb-5 text-center md:text-left">
      <img
        src="/img/jornkane3.jpg"
        alt="Jørn Kanestrøm"
        className="w-[150px] md:w-[200px] ml-0 md:ml-5 rounded-lg shadow-lg shrink-0"
      />

      <div className="max-w-[98vw] md:max-w-[80vw] text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,1)] px-3">
        Velg klasse og fag i menyen over og se om du finner det du leter etter
        <br />
        Tips og linker til tutorials som inngår i faget utvikling på vg1 og vg2 informasjonsteknologi og medieproduksjon blir å finne her.
        <br />
        Programmering og webutvikling:
        <br />
        Web: Html, css og litt JavaScript. Programmering: først og fremst Python, en del JavaScript og eventuelt C# eller C++.
        <br />
        Det kan hende det kommer litt stoff om databaser også -&gt; SQL og MsAccess
        <br />
        Siden oppdateres etter behov (eller når Jørn tester ut ting)
        <br /><br />
        <b>Sist oppdatert:</b>
        <h3 className="text-xl">08.12.25</h3>
        Filmer kultur.html
      </div>
    </div>

    {/* Content */}
    <div className="max-w-[98vw] md:max-w-[80vw] text-white drop-shadow-[2px_2px_3px_rgba(0,0,0,1)] px-5">
      La til ny og forbedret brukerundersøkelse om AI:
      <br />

      <iframe
        className="w-full max-w-[640px] h-[480px] border-0"
        src="https://forms.office.com/e/gsiGNct7pK?embed=true"
        allowFullScreen
        title="AI-undersøkelse"
      ></iframe>

      <br /><br />

      Jeg ønsker å ha hvit tekst, og skygge på teksten slik at den vises mot bakgrunnen...
      <br />
      For mørkere overlay: rgba(0, 0, 0, 0.5)
      <br />
      For lysere overlay: rgba(255, 255, 255, 0.5)
      <br /><br />

      <img
        src="/img/disableAI.jpg"
        alt="Disable AI"
        className="w-full max-w-[700px] my-4 rounded shadow-lg"
      />

      <ul className="list-square pl-5 my-3">
        <li>
          Bakgrunnsbilde er Ai-generert. Futuristisk steam punk by, laget med bildeskaper i Bing, levert av Dall E 3
        </li>
        <li>
          <a
            href="https://www.bing.com/images/create?FORM=IRPGEN"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-yellow-400 underline decoration-dotted hover:text-green-400"
          >
            Bildeskaper
          </a>
        </li>
      </ul>

      <footer className="mt-8">
        <p>
          Version 1.5
          <br />
          Copyright 2025 Jørn Kanestrøm, Kane Computing.
        </p>
      </footer>
    </div>
  </div>
);

export default HomePage;
