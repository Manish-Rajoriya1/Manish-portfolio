import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


// ==========================================
// HOME PAGE
// ==========================================

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};


// ==========================================
// ABOUT PAGE
// ==========================================

const AboutPage = () => {
  return (
    <main className="page-section">
      <About />
    </main>
  );
};


// ==========================================
// SKILLS PAGE
// ==========================================

const SkillsPage = () => {
  return (
    <main className="page-section">
      <Skills />
    </main>
  );
};


// ==========================================
// PROJECTS PAGE
// ==========================================

const ProjectsPage = () => {
  return (
    <main className="page-section">
      <Projects />
    </main>
  );
};


// ==========================================
// EXPERIENCE PAGE
// ==========================================

const ExperiencePage = () => {
  return (
    <main className="page-section">
      <Experience />
    </main>
  );
};


// ==========================================
// EDUCATION PAGE
// ==========================================

const EducationPage = () => {
  return (
    <main className="page-section">
      <Education />
    </main>
  );
};


// ==========================================
// CERTIFICATIONS PAGE
// ==========================================

const CertificationsPage = () => {
  return (
    <main className="page-section">
      <Certifications />
    </main>
  );
};


// ==========================================
// CONTACT PAGE
// ==========================================

const ContactPage = () => {
  return (
    <main className="page-section">
      <Contact />
    </main>
  );
};


// ==========================================
// APP
// ==========================================

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* ABOUT */}
        <Route
          path="/about"
          element={<AboutPage />}
        />

        {/* SKILLS */}
        <Route
          path="/skills"
          element={<SkillsPage />}
        />

        {/* PROJECTS */}
        <Route
          path="/projects"
          element={<ProjectsPage />}
        />

        {/* EXPERIENCE */}
        <Route
          path="/experience"
          element={<ExperiencePage />}
        />

        {/* EDUCATION */}
        <Route
          path="/education"
          element={<EducationPage />}
        />

        {/* CERTIFICATIONS */}
        <Route
          path="/certifications"
          element={<CertificationsPage />}
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={<ContactPage />}
        />

        {/* 404 */}
        <Route
          path="/"
          element={<Home />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;