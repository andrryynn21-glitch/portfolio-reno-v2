import { FiArrowUpRight } from "react-icons/fi";
import profile from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <a
          className="wordmark"
          href="#home"
          aria-label="Reno Andrian, kembali ke atas"
        >
          reno<span className="brand-dot">.</span>
        </a>
        <p>
          &copy; {new Date().getFullYear()} {profile.name}
          <span>Dibangun dengan rasa ingin tahu & bantuan AI.</span>
        </p>
        <a className="text-link" href="#home">
          Kembali ke atas <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}
