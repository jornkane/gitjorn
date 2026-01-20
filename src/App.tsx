import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import IMPage from './pages/IMPage';
import ITPage from './pages/ITPage';
import "./app.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/IM" element={<IMPage />} />
        <Route path="/IT" element={<ITPage />} />
      </Routes>
    </Router>
  );
}

export default App;
