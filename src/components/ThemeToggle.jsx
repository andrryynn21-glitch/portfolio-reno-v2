import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") === "dark" ? "dark" : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#14251f" : "#f6f5ee");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Theme switching still works when the browser blocks storage.
    }
  }, [theme]);

  return (
    <button
      type="button"
      className="icon-button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label={
        theme === "dark" ? "Aktifkan tema terang" : "Aktifkan tema gelap"
      }
    >
      {theme === "dark" ? (
        <FiSun aria-hidden="true" />
      ) : (
        <FiMoon aria-hidden="true" />
      )}
    </button>
  );
}
