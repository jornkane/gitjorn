import Navbar from "../components/UI/Navbar";

const ITPage = () => (

  <div>
    <Navbar />
    <div className="brodtekst">
      <h1>VG2 IT</h1>
      <img
      src="/img/storRobot.jpg"
      width="40%"
      alt="illustration-of-people-building-a-gigantic-robot-with-ai-on-its-chest-which-then-breaks-loose-and-destroys-the-city-around-it."
    />
    <br />
    Bildekilde:{" "}
    <a
      href="https://spectrum.ieee.org/isaac-asimov-robotics"
      target="_blank"
      rel="noopener noreferrer"
    >
      spectrum.ieee.org
    </a>
    <br />
    <br />
    <a href="/oevingJS">Øving JavaScript oop ligger her</a>
    <div className="brodtekst">
      Vi har jobbet med målet: "vurdere fordeler og ulemper ved ulike programmeringsspråk og velge og anvende relevante programmeringsspråk og algoritmer i eget arbeid"
      <br />
      Og derfor har vi nå holdt på med litt mer avansert programmering, nærmere bestemt objektorientert programmering (oop). Og først er det JavaScript vi undersøker. Link til
      <a
        href="https://www.youtube.com/watch?v=GEuS0tfLfEY"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        videoen vi har brukt her
      </a>
      <br />
      Og her er kode jeg har skrevet samtidig som jeg har gått gjennom videoen (legg alt i body-taggen i html-dokumentet ditt og åpne konsoll i browser (med Chrome: fn+f12, Opera: ctrl+shift+c):
    </div>
    <pre>
    </pre>
  </div>
</div>
);

export default ITPage;