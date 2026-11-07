import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import navLinks from "../data/navLinks";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    let observer;
    const observeSections = () => {
      observer?.disconnect();
      // Pixel margins keep the active band consistent on wide, short viewports.
      const top = Math.min(100, window.innerHeight * 0.2);
      const bottom = Math.max(0, window.innerHeight - top - 100);
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) setActive(entry.target.id);
          }
        },
        { rootMargin: `-${top}px 0px -${bottom}px 0px` },
      );
      document
        .querySelectorAll("main section[id]")
        .forEach((section) => observer.observe(section));
    };
    observeSections();
    window.addEventListener("resize", observeSections);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", observeSections);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOutside = (event) => {
      if (!navRef.current?.contains(event.target)) setMenuOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 861px)");
    const closeOnResize = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    desktop.addEventListener("change", closeOnResize);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
      desktop.removeEventListener("change", closeOnResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <nav
        className="container navbar"
        aria-label="Navigasi utama"
        ref={navRef}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget))
            setMenuOpen(false);
        }}
      >
        <a
          className="wordmark"
          href="#home"
          aria-label="Reno Andrian, beranda"
          onClick={() => setMenuOpen(false)}
        >
          reno<span className="brand-dot">.</span>
          <span className="wordmark-note">PORTFOLIO</span>
        </a>
        <div
          id="navigation-menu"
          className={`nav-menu${menuOpen ? " is-open" : ""}`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              aria-current={active === link.id ? "location" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <a
            href="#contact"
            className="nav-contact"
            onClick={() => setMenuOpen(false)}
          >
            Mari terhubung <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="icon-button menu-toggle"
            ref={toggleRef}
            type="button"
            aria-label={menuOpen ? "Tutup navigasi" : "Buka navigasi"}
            aria-controls="navigation-menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <FiX aria-hidden="true" />
            ) : (
              <FiMenu aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
