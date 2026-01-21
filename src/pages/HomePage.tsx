
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { useEffect, useState } from "react";
import EasterEgg from "../components/EasterEgg";


const HomePage = () => {
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    let buffer = "";
    const handler = (e: KeyboardEvent) => {
      buffer += e.key;
      if (buffer.length > 10) buffer = buffer.slice(-10);
      if (/david/i.test(buffer)) {
        setShowEasterEgg(true);
        setTimeout(() => setShowEasterEgg(false), 4000);
        buffer = "";
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden">
      <Navbar />
      <EasterEgg show={showEasterEgg} />
      <main className="p-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-shadow-lg mt-4 mb-2">
            Velkommen til Jørn Kanestrøms Skolehjemmeside
          </h1>
        </header>

        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8 bg-white/10 p-8 rounded-xl backdrop-blur-sm shadow-xl">
            <img
              src="./img/jornkane3.jpg"
              alt="Jørn Kanestrøm"
              className="w-48 rounded-full shadow-2xl border-4 border-yellow-300"
            />
            <div className="max-w-2xl text-shadow-md space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-yellow-300 mb-2">
                  Hei og velkommen!
                </h2>
                <p className="text-lg font-medium">
                  Velg klasse og fag i menyen over for å finne det du leter
                  etter.
                </p>
              </div>

              <p className="text-gray-100">
                Her finner du tips, linker og tutorials for{" "}
                <strong>utvikling</strong> på vg1 og vg2 informasjonsteknologi
                og medieproduksjon.
              </p>

              <div className="bg-black/20 p-5 rounded-lg border border-white/10">
                <h3 className="font-bold text-green-300 mb-2 border-b border-white/10 pb-1">
                  Fagområder
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong className="block text-pink-300">
                      Webutvikling
                    </strong>
                    HTML, CSS og JavaScript
                  </div>
                  <div>
                    <strong className="block text-blue-300">
                      Programmering
                    </strong>
                    Python, JavaScript (evt. C#/C++)
                  </div>
                  <div>
                    <strong className="block text-purple-300">Databaser</strong>
                    SQL og MsAccess (kommer mer)
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-300 italic pt-2">
                Denne siden er laget av Jørn Kanestrøm, lærer ved Kristiansund
                VGS.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Bakgrunnsbilde</h2>
          <div className="max-w-3xl text-shadow-md">
            <p>
              P.S. for de som ønsker å lære programmering er det faktisk
              nødvendig å skru av AI i VS-Code. Den har nå blitt så påtrengende
              at den hele tiden fullfører nye setninger for deg.
            </p>
            <img
              src="./img/disableAI.jpg"
              className="w-full max-w-4xl rounded-lg shadow-lg mt-5"
              alt="Disable AI"
            />
          </div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Undersøkelser</h2>
          <div className="max-w-3xl text-shadow-md">
            <p>
              Her finner du undersøkelser og spørreskjemaer som kan være
              relevante for deg:
            </p>
            <iframe
              src="https://forms.office.com/e/gsiGNct7pK?embed=true"
              width="100%"
              height="480"
              frameBorder="0"
              className="rounded-lg shadow-lg mt-5"
              allowFullScreen
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
