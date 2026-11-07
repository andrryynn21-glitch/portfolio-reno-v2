import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Langsung ke konten
      </a>
      <Navbar />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
