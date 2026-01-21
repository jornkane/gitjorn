import { Routes, Route } from "react-router-dom";
import "./App.css";

// Importer alle sidene og komponentene som skal brukes i rutene
import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import DynamicCoursePage from "./components/templates/DynamicCoursePage";
import ITPage from "./pages/ITPage";
import IMPage from "./pages/IMPage";
import LinksPage from "./pages/Links";
import PythonPage from "./pages/PythonPage";
import WordListsPage from "./pages/WordListsPage";
import CulturePage from "./pages/CulturePage";
import Page1AO8 from "./pages/Page1AO8";
import TestPage from "./pages/TestPage";

// Hovedkomponenten for applikasjonen som definerer ruter til forskjellige sider. som er importert over.
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/kurs" element={<CoursesPage />} />
      <Route path="/kurs/:courseId" element={<DynamicCoursePage />} />
      <Route path="/im" element={<IMPage />} />
      <Route path="/it" element={<ITPage />} />
      <Route path="/1AO8" element={<Page1AO8 />} />
      <Route path="/linker" element={<LinksPage />} />
      <Route path="/ordlister" element={<WordListsPage />} />
      <Route path="/kultur" element={<CulturePage />} />
      <Route path="/python" element={<PythonPage />} />
      <Route path="/test" element={<TestPage />} />
      <Route path="*" element={<div>404 - Side ikke funnet</div>} />
    </Routes>
  );
}

export default App;
