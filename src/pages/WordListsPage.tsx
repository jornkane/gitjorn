import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const WordListsPage = () => {
  const [showNynorsk, setShowNynorsk] = useState(false);
  const [showDialekt, setShowDialekt] = useState(false);
  const [showOrdtak, setShowOrdtak] = useState(false);

  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />

      <main className="grow p-8 max-w-4xl mx-auto w-full">
        <header className="mb-8 text-center">
          <h1 className="text-5xl font-bold mb-4 text-shadow-lg">
            Ordlister og ordtak
          </h1>
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 inline-block">
            <p className="italic text-gray-200">"Eg veit meg eit land..."</p>
          </div>
        </header>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-2xl space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg">
              Her har vi noen artige ordlister både nynorsk og dialekt. Det
              hadde vært artig med tips til flere gode ord!
            </p>
            <p className="text-sm text-gray-300 italic">
              Tips kan sendes via messenger eller via kontaktskjema (når det
              blir laget).
            </p>
          </div>
          <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
            <button
              onClick={() => setShowNynorsk(!showNynorsk)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <h2 className="text-xl font-bold text-yellow-300">
                Nynorsk-ordliste
              </h2>
              <span
                className={`transform transition-transform ${showNynorsk ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>

            {showNynorsk && (
              <div className="p-6 border-t border-gray-700 bg-black/20">
                <p className="mb-4 text-gray-300">
                  Her er min liste over rare nynorskord:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
                  <li>
                    <span className="text-green-400 font-bold">Usemje</span> -
                    uenighet
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Vonbroten</span>{" "}
                    - skuffet, desillusjonert
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">
                      Rørslehemma
                    </span>{" "}
                    - bevegelseshemmet
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Korkje</span> -
                    verken
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Einskild</span> -
                    enkelt
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Råka</span> -
                    truffet
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Førebels</span> -
                    foreløpig
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Handsame</span> -
                    håndtere
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Syte for</span> -
                    sørge for
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Truverd</span> -
                    troverdighet
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Andlete</span> -
                    ansikt
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Kryskap</span> -
                    stolthet
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Vit</span> - vett
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Avdi</span> -
                    fordi(?)
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Avgjersla</span>{" "}
                    - avgjørelsen
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">
                      Lauspengeangrep
                    </span>{" "}
                    - løsepengeangrep
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Heider</span> -
                    heder
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Svevn</span> -
                    søvn
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Draum</span> -
                    drøm
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">
                      Skodespelar
                    </span>{" "}
                    - skuespiller
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Audmjuk</span> -
                    ydmyk
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Allereie</span> -
                    allerede
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Plar</span> -
                    pleier
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">
                      Føreseieleg
                    </span>{" "}
                    - forutsigbart
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Sal</span> - salg
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Sonen</span> -
                    sønnen
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">Ope</span> -
                    åpent
                  </li>
                  <li>
                    <span className="text-green-400 font-bold">
                      Medvitslaus
                    </span>{" "}
                    - bevisstløs
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
            <button
              onClick={() => setShowDialekt(!showDialekt)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <h2 className="text-xl font-bold text-yellow-300">
                Snedige ord på dialekt
              </h2>
              <span
                className={`transform transition-transform ${showDialekt ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>

            {showDialekt && (
              <div className="p-6 border-t border-gray-700 bg-black/20">
                <p className="mb-4 text-gray-300">
                  Mæstpartn tå orda og vendinganj e frå Straumsnes...
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-mono">
                  <li>
                    <span className="text-purple-400 font-bold">Annjsannj</span>{" "}
                    - om det er annerledes eller ikke
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Dælje te</span>{" "}
                    - slå til
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">
                      Karravorrinj
                    </span>{" "}
                    - tøff i trynet
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Spræt</span> -
                    sprøyte
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Kvækks</span> -
                    veps
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Snytskaft</span>{" "}
                    - nese
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Innkvart</span>{" "}
                    - noe, litt
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Brok</span> -
                    bukse
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Olabrok</span> -
                    jeans
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Punnjbrok</span>{" "}
                    - truse
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Dikje</span> -
                    gjørme
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Mennjanj</span>{" "}
                    - morgenene
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Spæi</span> -
                    balltre
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Attlægå</span> -
                    åker
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Talgjøs</span> -
                    stearinlys
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">
                      Dærståkkjen
                    </span>{" "}
                    - dørterskelen
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Sykjest</span> -
                    ønske sterkt
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Sneddje</span> -
                    praktisk
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Øskje</span> -
                    eske
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Armæst</span> -
                    streve
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Eling</span> -
                    regn
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Håsså</span> -
                    sokker
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Labba</span> -
                    sokker
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Svoltinj</span>{" "}
                    - sulten
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Ilt</span> -
                    vondt
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Gællinj</span> -
                    sint
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Færreåt</span> -
                    før/på forhånd
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Besætt</span> -
                    voldsomt
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">
                      Obsternasig
                    </span>{" "}
                    - tverr/vanskelig
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">
                      Svettebrøt
                    </span>{" "}
                    - svetteanfall
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Trele</span> -
                    vanskelig
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Braddj</span> -
                    skråning
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Tærgaddj</span>{" "}
                    - tørr vedkubbe
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Kålv</span> -
                    velte
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">
                      Enkjemannjstarschjen
                    </span>{" "}
                    - albue-nerve
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Rakkel</span> -
                    gå tregt
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Shælv</span> -
                    skjelve
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Blokkflæt</span>{" "}
                    - blokkfløyte
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Kvætmmjøl</span>{" "}
                    - hvetemel
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Tikkkje</span> -
                    tatt
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">
                      Krongelkjærr
                    </span>{" "}
                    - piggete busker
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Vassbøtt</span>{" "}
                    - vannbøtte
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">
                      Bellet i ram
                    </span>{" "}
                    - bilde i ramme
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Del</span> -
                    sikle
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Håkk</span> -
                    hake
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Ævv</span> - øye
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Hauvv</span> -
                    hode
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Dråk</span> -
                    jente
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Drekern</span> -
                    jentene
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Tæs</span> -
                    jente
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Jevver</span> -
                    gevær
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Nætt</span> -
                    nøtt
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Per</span> -
                    pære
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Æppel</span> -
                    eple
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Æppelshin</span>{" "}
                    - appelsin
                  </li>
                  <li>
                    <span className="text-purple-400 font-bold">Ber</span> - bær
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
            <button
              onClick={() => setShowOrdtak(!showOrdtak)}
              className="w-full p-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
            >
              <h2 className="text-xl font-bold text-yellow-300">
                Kjente og ukjente ordtak
              </h2>
              <span
                className={`transform transition-transform ${showOrdtak ? "rotate-180" : ""}`}
              >
                ▼
              </span>
            </button>

            {showOrdtak && (
              <div className="p-6 border-t border-gray-700 bg-black/20 text-sm">
                <p className="mb-4 text-gray-300">
                  I mørket er alle katter grå...
                </p>
                <ul className="space-y-3">
                  <li>
                    <span className="font-bold text-blue-300">
                      Gå ikke over bekken etter vann
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Når det regner på presten så drypper det på klokkeren
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Å være på den fjøla som rister
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Man skal tidlig krøkes om man god krok skal bli
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Det er bedre med en fugl i handa en ti på taket
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Å bli uglesett
                    </span>{" "}
                    (kommer av dansk og det var opprinnelig ulvesett)
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Arbeidet adler mannen
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Den som vil være med på leken må tåle steken
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Myke senger gir late drenger
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Når solen går ned i vest arbeider den late Best
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Lediggang er roten til alt ondt
                    </span>{" "}
                    (idle hands are the devils tools)
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Når man snakker om sola
                    </span>{" "}
                    (speak of the devil)
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Det er håp i hengende snøre
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Heller buken sprenge enn maten slenge
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Nød lærer naken kvinne å spinne
                    </span>
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Å ha svin på skogen
                    </span>{" "}
                    (betyr å unnlate verdier eller å ha hemmeligheter)
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Å stå skolerett
                    </span>{" "}
                    - å forklare seg og bli irettesatt
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Å skille klinten fra hveten
                    </span>{" "}
                    - Klinte er en giftig, men så og si utryddet plante
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Det dunkelt sagte er det dunkelt tenkte.
                    </span>{" "}
                    – Man pakker det man sier inn i mange vanskelige eller
                    uspesifikke ord.
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Drite på draget
                    </span>
                    , alternativ variant Drite på leggen eller Drite seg ut.
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Fryd og gammen.
                    </span>{" "}
                    – Glede og fornøyelse.
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      For fulle mugger.
                    </span>{" "}
                    – Gjøre noe for fullt, med toppfart eller med all sin kraft.
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Gå i bresjen.
                    </span>{" "}
                    – Gå foran, ta ledelsen.
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Gå på limpinnen.
                    </span>{" "}
                    – Bli lurt eller narret.
                  </li>
                  <li>
                    <span className="font-bold text-blue-300">
                      Å gjøre sine hoser grønne
                    </span>{" "}
                    - å innynde seg hos en kvinne
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default WordListsPage;
