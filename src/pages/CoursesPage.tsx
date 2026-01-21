import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import { getAllCourses } from "../utils/courseLoader";

// Komponent for kursoversiktssiden som viser en liste over tilgjengelige kurs. trenger ikke å endre denne filen. vist du skal legge til nye kurs, gjør det i kursdatafilene i stedet.
const CoursesPage = () => {
  const courses = getAllCourses();

  return (
    <div className="bg-linear-to-r from-[#00735c] to-[rgba(177,245,6,0.5)] text-white font-sans text-lg overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="p-8 max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-5xl font-bold mb-4">Kursoversikt</h1>
          <p className="text-xl text-gray-300 mb-4">
            Utforsk våre tilgjengelige kurs og lær noe nytt i dag!
          </p>
        </header>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-6">Tilgjengelige kurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Link
                key={course.metadata.id}
                to={`/kurs/${course.metadata.id}`}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {course.metadata.image && (
                  <img
                    src={course.metadata.image}
                    alt={course.metadata.imageAlt || course.metadata.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-2xl font-bold mb-2">
                  {course.metadata.title}
                </h3>
                <p className="text-gray-300">{course.metadata.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CoursesPage;
