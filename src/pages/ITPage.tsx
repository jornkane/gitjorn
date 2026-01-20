import Navbar from "../components/UI/Navbar";

const ITPage = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />

    <div className="max-w-4xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">VG2 IT</h1>

      <img
        src="/img/storRobot.jpg"
        alt="illustration-of-people-building-a-gigantic-robot-with-ai-on-its-chest-which-then-breaks-loose-and-destroys-the-city-around-it."
        className="w-2/5 mb-2 rounded-lg shadow-md"
      />

      <p className="text-sm mb-4">
        Bildekilde:{" "}
        <a
          href="https://spectrum.ieee.org/isaac-asimov-robotics"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          spectrum.ieee.org
        </a>
      </p>

      <a
        href="/oevingJS"
        className="inline-block mb-6 text-blue-600 font-medium hover:underline"
      >
        Øving JavaScript oop ligger her
      </a>

      <div className="space-y-4 leading-relaxed">
        <p>
          Vi har jobbet med målet:{" "}
          <span className="font-semibold">
            "vurdere fordeler og ulemper ved ulike programmeringsspråk og velge og
            anvende relevante programmeringsspråk og algoritmer i eget arbeid"
          </span>
        </p>

        <p>
          Og derfor har vi nå holdt på med litt mer avansert programmering,
          nærmere bestemt objektorientert programmering (oop). Og først er det
          JavaScript vi undersøker. Link til{" "}
          <a
            href="https://www.youtube.com/watch?v=GEuS0tfLfEY"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            videoen vi har brukt her
          </a>
          .
        </p>

        <p>
          Og her er kode jeg har skrevet samtidig som jeg har gått gjennom videoen
          (legg alt i body-taggen i html-dokumentet ditt og åpne konsoll i browser
          (med Chrome: fn+f12, Opera: ctrl+shift+c):
        </p>
      </div>

      <pre className="mt-6 p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">
        {/* kode kan legges her */}
      </pre>
    </div>
  </div>
);

export default ITPage;
