import Navbar from "../components/Navbar";


const ITPage = () => {

  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="p-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6">VG2 IT</h1>

        <div className="mb-8">
          <img
            src="/img/storRobot.jpg"
            className="w-2/5 rounded-lg shadow-lg"
            alt="illustration-of-people-building-a-gigantic-robot-with-ai-on-its-chest-which-then-breaks-loose-and-destroys-the-city-around-it"
          />
          <p className="text-sm mt-2">
            Bildekilde:{" "}
            <a
              href="https://spectrum.ieee.org/isaac-asimov-robotics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline"
            >
              spectrum.ieee.org
            </a>
          </p>
        </div>

        <div className="mb-6">
          <a
            href="/oevingJS.html"
            className="text-blue-300 hover:text-blue-100 underline text-xl"
          >
            Øving JavaScript oop ligger her
          </a>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6 shadow-xl">
          <p className="mb-4">
            Vi har jobbet med målet: "vurdere fordeler og ulemper ved ulike
            programmeringsspråk og velge og anvende relevante
            programmeringsspråk og algoritmer i eget arbeid"
          </p>
          <p className="mb-4">
            Og derfor har vi nå holdt på med litt mer avansert programmering,
            nærmere bestemt objektorientert programmering (oop). Og først er det
            JavaScript vi undersøker. Link til
            <a
              href="https://www.youtube.com/watch?v=GEuS0tfLfEY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 underline ml-1"
            >
              videoen vi har brukt her
            </a>
          </p>
          <p>
            Og her er kode jeg har skrevet samtidig som jeg har gått gjennom
            videoen (legg alt i body-taggen i html-dokumentet ditt og åpne
            konsoll i browser med Chrome: fn+f12, Opera: ctrl+shift+c):
          </p>
        </div>

house.addResident(Margot); // legges til enklere siden vi har addResident som klassemetode :)
house2.addResident(new Person("MB", 69));
house2.addResident(Harra);
      </main>
    </div>
  );
};

export default ITPage;
