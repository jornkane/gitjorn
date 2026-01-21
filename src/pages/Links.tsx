import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

const LinksPage: React.FC = () => {
  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="grow p-8 max-w-4xl mx-auto w-full">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-shadow-lg">Linker</h1>
          <p className="text-xl text-gray-200">Nyttige ressurser og verktøy</p>
        </header>

        <div className="space-y-6 bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
          <div className="mb-8">
            <a
              href="https://www.newscientist.com/definition/occams-razor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 hover:underline"
            >
              Keep It Simple, Stupid! (KISS)
            </a>
            <p className="mt-2 text-gray-100">
              Det enkleste er ofte det beste (ikke alltid) også kjent som Occams
              barberhøvel.
            </p>
          </div>

          <div className="mb-8">
            <a
              href="/python"
              className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 hover:underline"
            >
              Python-programmer (Trinket/Runner)
            </a>
            <p className="mt-2 text-gray-100">
              Prøv Python-programmering direkte i nettleseren vår.
            </p>
          </div>

          <div className="mb-8">
            <a
              href="https://www.youtube.com/watch?v=GEuS0tfLfEY"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 hover:underline"
            >
              Object Oriented Programming i JS med Pedro
            </a>
            <p className="mt-2 text-gray-100">
              Lær OOP konsepter i JavaScript.
            </p>
          </div>

          <div className="mb-8">
            <a
              href="/im"
              className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 hover:underline"
            >
              Jørns testside (IM Page)
            </a>
            <p className="mt-2 text-gray-100">
              Informasjonsteknologi og medieproduksjon side.
            </p>
          </div>

          <div className="mb-8">
            <a
              href="https://www.datatilsynet.no/personvern-pa-ulike-omrader/internett-og-apper/bilder-pa-nett/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 hover:underline"
            >
              Personvernsregler
            </a>
            <p className="mt-2 text-gray-100">
              Dette bør alle være obs på. Viktig informasjon fra Datatilsynet om
              bilder på nett.
            </p>
          </div>

          <div className="mb-8">
            <a
              href="/ordlister"
              className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 hover:underline"
            >
              Ordlister og Ordtak
            </a>
            <p className="mt-2 text-gray-100">
              Nynorsk, dialektord og kjente ordtak (samlet av Jørn).
            </p>
          </div>

          <hr className="border-gray-400 my-8" />

          <h2 className="text-3xl font-bold mb-6 text-white text-shadow">
            Git Tutorials
          </h2>
          <p className="mb-4">
            For å komme igang med GIT og Github har jeg benyttet meg av mange
            hjelpevideoer på Youtube. Aller først brukte jeg denne og den
            anbefales til oppstart:
          </p>

          <div className="space-y-4 ml-4">
            <div>
              <a
                href="https://youtu.be/CvUiKWv2-C0?si=TvZfXoyXlSh0qzPY"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-300 hover:text-blue-100 hover:underline"
              >
                Git tutorial for absolute beginners. Dave Gray
              </a>
            </div>

            <div>
              <a
                href="https://youtu.be/EGooeHH3hDY?si=wUiQj66d68gHK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-300 hover:text-blue-100 hover:underline"
              >
                Git tutorial: How to undo git commits osv. Dave Gray
              </a>
            </div>

            <div>
              <a
                href="https://www.youtube.com/watch?v=tRZGeaHPoaw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-300 hover:text-blue-100 hover:underline"
              >
                Git tutorial: for absolute beginners (46min). Kevin Stratvert
              </a>
            </div>
          </div>

          <hr className="border-gray-400 my-8" />

          <h2 className="text-3xl font-bold mb-6 text-white text-shadow">
            Kunstig Intelligens (AI)
          </h2>
          <div className="mb-6">
            <p className="mb-2">
              Litt om kunstig intelligens (AI på internasjonalt eller KI på
              norsk):
            </p>
            <a
              href="https://ndla.no/r/mediesamfunnet-1/kunstig-intelligens-ai/aecd110b6f/13561"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-300 hover:text-blue-100 hover:underline"
            >
              Forklaring på hva AI (KI) faktisk er for noe
            </a>
          </div>

          <hr className="border-gray-400 my-8" />

          <h2 className="text-3xl font-bold mb-6 text-white text-shadow">
            Elevsider
          </h2>
          <div className="mb-6">
            <p className="mb-2">
              Linker til sites laget av nåværende og tidligere elever på IM:
            </p>
            <a
              href="https://teknisk-sett.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-300 hover:text-blue-100 hover:underline"
            >
              Hjemmesiden til Teknisk-sett (23/24)
            </a>
            <p className="text-gray-300 text-sm mt-1">
              Spennende site laget av dyktige IM-elever!
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LinksPage;
