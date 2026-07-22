import "../styles/Footer.css";

import { FaGithub, FaInstagram, FaEnvelope, FaHeart } from "react-icons/fa";

import { motion } from "framer-motion";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* LEFT */}

        <div className="footer-brand">
          <h2>
            Reno<span>.</span>
          </h2>

          <p>
            Frontend Developer yang berfokus pada pembuatan website modern,
            responsif, dan premium menggunakan React.js.
          </p>
        </div>

        {/* CENTER */}

        <div className="footer-links">
          <h3>Navigation</h3>

          <a href="#home">Home</a>

          <a href="#about">About</a>

          <a href="#projects">Projects</a>

          <a href="#skills">Skills</a>

          <a href="#experience">Experience</a>

          <a href="#contact">Contact</a>
        </div>

        {/* RIGHT */}

        <div className="footer-social">
          <h3>Connect</h3>

          <a
            href="https://github.com/andrryynn21-glitch"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://instagram.com/wortfley_"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>

          <a href="mailto:andrryynn21@gmail.com">
            <FaEnvelope />
          </a>
        </div>
      </motion.div>

      {/* COPYRIGHT */}

      <div className="footer-bottom">
        <p>
          © {year} Reno Andrian
          <FaHeart className="heart" />
          Built with React.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;
