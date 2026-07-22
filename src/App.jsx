import "./App.css";
import { useEffect, useState } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import PageTransition from "./components/PageTransition";
import { Toaster } from "react-hot-toast";
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Loader loading={loading} />

      {!loading && (
        <PageTransition>
          <Navbar />
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
          <BackToTop />
        </PageTransition>
      )}
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3500,
          style: {
            background: "#111111",
            color: "#ffffff",
            border: "1px solid #D4AF37",
            borderRadius: "16px",
            padding: "16px",
            boxShadow: "0 10px 40px rgba(0,0,0,.45)",
          },
          success: {
            iconTheme: {
              primary: "#D4AF37",
              secondary: "#111111",
            },
          },
          error: {
            iconTheme: {
              primary: "#ff4d4f",
              secondary: "#111111",
            },
          },
        }}
      />
    </>
  );
}

export default App;
