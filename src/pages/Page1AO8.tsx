import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Page1AO8 = () => {
  return (
    <div className="bg-linear-to-r from-cyan-900 to-blue-900 text-white font-sans text-lg overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="grow p-8 max-w-4xl mx-auto w-full">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-200 text-shadow-lg">
            1AO8 - Informasjonsteknologi og medieproduksjon
          </h1>
        </header>

        <section className="bg-white/10 backdrop-blur-md rounded-xl p-8 shadow-2xl mb-8">
          <p className="text-xl mb-6 leading-relaxed">
            Dette er en side med linker og tips til elever på 1AO8. Siden er
            under utvikling og vil bli oppdatert etterhvert som jeg finner
            nyttig stoff.
          </p>

          <figure className="mb-4">
            <img
              src="./img/bladeRunner.jpg"
              alt="Blade Runner 2049"
              className="w-full md:w-2/3 rounded-lg shadow-lg border border-white/20 hover:scale-[1.01] transition-transform duration-300"
            />
            <figcaption className="text-sm text-gray-400 mt-2 italic">
              Bildekilde:{" "}
              <a
                href="https://leonardmaltin.com/blade-runner-2049-not-worth-the-wait/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-300 hover:underline"
              >
                leonardmaltin.com
              </a>
            </figcaption>
          </figure>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Page1AO8;
