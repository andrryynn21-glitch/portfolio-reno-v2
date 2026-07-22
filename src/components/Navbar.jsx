import "../styles/Navbar.css";
import { useEffect, useState } from "react";
import navLinks from "../data/navLinks";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Glass Navbar
      setScrolled(window.scrollY > 80);

      // Active Menu
      const sections = document.querySelectorAll("section");

      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      if (current) {
        setActive(current);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Jalankan sekali saat halaman dibuka
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="container">
        <nav className={scrolled ? "navbar scrolled" : "navbar"}>
          {/* Logo */}
          <a href="#home" className="logo">
            R<span>A.</span>
          </a>

          <div className="nav-actions">
            <ThemeToggle />

            {/* Hamburger */}
            <button
              className="menu-toggle"
              aria-label={
                menuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Menu */}
          <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    active === link.href.replace("#", "") ? "active" : ""
                  }
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
