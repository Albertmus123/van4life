import About from "./pages/About";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Vans from "./pages/Vans";

function App() {
  return (
    <BrowserRouter>
      <Link to="/">#VAN4LIFE</Link>
      <Link to="/vans">Vans</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
