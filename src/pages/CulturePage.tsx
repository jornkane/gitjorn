import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import cultureData from "../data/culture.json";

const CulturePage = () => {
  return (
    <div className="bg-linear-to-r from-purple-900 to-indigo-900 text-white font-sans text-lg overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="grow p-8 max-w-6xl mx-auto w-full">
        <header className="mb-12 text-center">
          <h1 className="text-6xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-pink-400 to-yellow-300">
            Kultur
          </h1>
          <p className="text-2xl text-gray-200 font-light italic">
            "The finer things in life" – Film, serier og musikk.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold border-b-2 border-pink-500 pb-2 mb-6 flex items-center gap-2">
              🎬 Film & Serier
            </h2>
            {cultureData.movies.map((entry, index) => (
              <article
                key={index}
                className="bg-white/10 p-6 rounded-xl hover:bg-white/15 transition-colors"
              >
                <span className="text-xs font-bold text-pink-400 uppercase tracking-wider">
                  {entry.week}
                </span>
                <div className="space-y-6 mt-2">
                  {entry.items.map((item, i) => (
                    <div key={i}>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-base leading-relaxed mb-4">
                        {item.description}
                      </p>
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-yellow-400 transition-colors"
                        >
                          {item.linkText || "Les mer"}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}

            {cultureData.archive && cultureData.archive.length > 0 && (
              <article className="bg-white/10 p-6 rounded-xl hover:bg-white/15 transition-colors">
                <h3 className="text-2xl font-bold mb-4">
                  Anbefalinger fra arkivet
                </h3>
                <ul className="space-y-4">
                  {cultureData.archive.map((item, index) => (
                    <li key={index} className="border-l-4 border-blue-500 pl-4">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold hover:text-blue-300 block"
                      >
                        {item.title}
                      </a>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            )}
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl font-bold border-b-2 border-green-500 pb-2 mb-6 flex items-center gap-2">
              🎵 Musikk
            </h2>

            {cultureData.playlist && (
              <div className="bg-black/40 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-green-400">
                  {cultureData.playlist.title}
                </h3>
                <iframe
                  style={{ borderRadius: "12px" }}
                  src={cultureData.playlist.embedUrl}
                  width="100%"
                  height="380"
                  frameBorder="0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                ></iframe>
              </div>
            )}

            <article className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300">
                Ukens utvalgte
              </h3>

              <div className="space-y-6">
                {cultureData.music.map((item, index) => (
                  <div key={index}>
                    <p className="mb-2 font-semibold">
                      {item.week && (
                        <span className="text-green-400 mr-2">
                          [{item.week}]
                        </span>
                      )}
                      {item.description}
                    </p>
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src={item.embedUrl}
                      width="100%"
                      height="80"
                      frameBorder="0"
                      allowFullScreen
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      loading="lazy"
                    ></iframe>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>

        <div className="mt-16 bg-white/5 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-bold mb-4">Har du tips?</h3>
          <p className="mb-6 text-gray-300">
            Jeg tar gjerne imot tips til nye filmer, serier eller musikk!
          </p>
          <iframe
            width="100%"
            height="480px"
            src="https://forms.office.com/Pages/ResponsePage.aspx?id=5-wyud-clE20wRUlbkPH6nHQ7F2pSedAgDVSQsmPtRJURUhTMThQRDFINldQQ1ZMWkdQWUtVOFVEVi4u&embed=true"
            frameBorder="0"
            style={{ maxWidth: "100%", border: "none" }}
          >
            {" "}
          </iframe>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CulturePage;
