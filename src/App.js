import react from "react";
import "./index.css";
import Home from "./routes/Home";
import Contact from "./routes/Contact";
import Project from "./routes/Project";
import About from "./routes/About";

import{ Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Project" element={<Project />} />
    <Route path="/Contact" element={<Contact/>} />
    <Route path="/About" element={<About/>} />
  </Routes>
    </>
  );
}

export default App;
