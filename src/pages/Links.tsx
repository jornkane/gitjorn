
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

type LinkItem = {
  type: "external" | "internal" | "section";
  title: string;
  description?: string;
  url?: string;
};

// Komponent for Linker-siden som viser en liste over nyttige ressurser og verktøy. for å legge til nye linker, rediger src/data/links.json filen. trenger ikke å endre denne filen.
const LinksPage = () => {
  const [links, setLinks] = useState<LinkItem[]>([]);

  useEffect(() => {
    fetch("/src/data/links.json")
      .then((res) => res.json())
      .then((data) => setLinks(data));
  }, []);

  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="grow p-8 max-w-4xl mx-auto w-full">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-shadow-lg">Linker</h1>
          <p className="text-xl text-gray-200">Nyttige ressurser og verktøy</p>
        </header>
        <div className="space-y-6 bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl">
          {links.map((item, idx) => {
            if (item.type === "section") {
              return (
                <>
                  {idx !== 0 && <hr className="border-gray-400 my-8" />}
                  <h2 key={item.title} className="text-3xl font-bold mb-6 text-white text-shadow">
                    {item.title}
                  </h2>
                </>
              );
            }
            if (item.type === "external") {
              return (
                <div key={item.title} className="mb-8">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 hover:underline"
                  >
                    {item.title}
                  </a>
                  {item.description && (
                    <p className="mt-2 text-gray-100">{item.description}</p>
                  )}
                </div>
              );
            }
            if (item.type === "internal") {
              return (
                <div key={item.title} className="mb-8">
                  <Link
                    to={item.url || "#"}
                    className="text-2xl font-bold text-yellow-300 hover:text-yellow-100 hover:underline"
                  >
                    {item.title}
                  </Link>
                  {item.description && (
                    <p className="mt-2 text-gray-100">{item.description}</p>
                  )}
                </div>
              );
            }
            return null;
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LinksPage;
