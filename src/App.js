import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Movie from "../src/pages/Movie";
import Home from "./pages/Home";
import TVSeries from "./pages/TVseries";
function App() {
  return (
    <Router>
      <div>
        <header>
          <Navbar />
        </header>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Movie" element={<Movie />} />
          <Route path="/TVSeries" element={<TVSeries />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
