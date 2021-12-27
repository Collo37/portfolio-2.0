import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Project/Projects";

import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/UI components/Cursor/Cursor";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cursor />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
