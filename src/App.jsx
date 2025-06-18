import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";

import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import Scene from "./canvas/Scene.jsx";
import Skills from "./components/Skills.jsx";
import About from "./components/About.jsx";
import Education from "./components/Education.jsx";
import Footer from "./components/Footer.jsx";

// Component to scroll to section based on route path
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname === "/" ? "hero" : location.pathname.slice(1); // remove '/'
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return null;
};

const AppContent = () => {
  return (
    <div className="app-container">
      {/* Navbar and theme toggle */}
      <Navbar />
      <ThemeToggle />
      <ScrollToSection />

      {/* Hero */}
      <main className="main-content">
        <section id="hero"><Hero /></section>
      </main>

      {/* Canvas Scene */}
      <Scene />

      {/* Other sections */}
      <main className="main-content">
        <section id="about"><About /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer/>
    </div>
   
  );
};

// Routes setup
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<AppContent />} />
      <Route path="/home" element={<AppContent />} />
      <Route path="/about" element={<AppContent />} />
      <Route path="/education" element={<AppContent />} />
      <Route path="/skills" element={<AppContent />} />
      <Route path="/projects" element={<AppContent />} />
      <Route path="/contact" element={<AppContent />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
);

export default App;
