import {
  FiArrowDown,
  FiArrowUpRight,
  FiAperture,
  FiCheck,
  FiCode,
  FiCommand,
} from "react-icons/fi";
import profile from "../data/profile";
import projects from "../data/projects";
import portrait from "../assets/images/profile.png";
import yammatcha from "../assets/images/projects/yammatcha.webp";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero container"
      aria-labelledby="hero-heading"
    >
      <div className="hero-copy">
        <div className="availability">
          <span /> Terbuka untuk magang & kolaborasi
        </div>
        <p className="eyebrow hero-intro">RENO ANDRIAN / AI-ASSISTED BUILDER</p>
        <h1 id="hero-heading">
          Ide jadi nyata.
          <br />
          Dengan teknologi
          <br />
          dan <em>rasa ingin tahu.</em>
        </h1>
        <p className="hero-description">{profile.description}</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            Jelajahi karya <FiArrowDown aria-hidden="true" />
          </a>
          <a href="#about" className="text-link">
            Kenali saya <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <div className="hero-footnote">
          <span className="mini-star" aria-hidden="true">
            *
          </span>{" "}
          Bukan sekadar mencoba tools. Membangun sesuatu yang berguna.
        </div>
      </div>

      <div
        className="hero-art"
        aria-label="Eksplorasi ide menjadi produk digital"
      >
        <div className="art-grid" aria-hidden="true" />
        <div className="art-topline">
          <span>THE BUILDER'S DESK</span>
          <FiCommand aria-hidden="true" />
        </div>
        <div className="idea-note">
          <span className="note-pin" />
          <span className="eyebrow">BERAWAL DARI</span>
          <p>
            "Bagaimana kalau
            <br />
            ide ini dibuat nyata?"
          </p>
          <span className="note-line" />
        </div>
        <div className="browser-preview">
          <div className="browser-bar">
            <div className="browser-dots">
              <i />
              <i />
              <i />
            </div>
            <span>yammatcha / website</span>
            <FiArrowUpRight aria-hidden="true" />
          </div>
          <img
            src={yammatcha}
            alt="Cuplikan website Yammatcha, salah satu karya Reno"
            width="800"
            height="450"
            fetchPriority="high"
          />
        </div>
        <div className="build-label">
          <FiCode aria-hidden="true" />
          <div>
            <strong>Ide. Eksplorasi. Implementasi.</strong>
            <span>Human curiosity, AI-assisted.</span>
          </div>
          <span className="build-check">
            <FiCheck aria-hidden="true" />
          </span>
        </div>
        <div className="portrait-label">
          <img src={portrait} alt="" width="48" height="48" />
          <div>
            <strong>Reno Andrian</strong>
            <span>Selalu ada hal baru untuk dipelajari.</span>
          </div>
        </div>
        <FiAperture className="art-spark" aria-hidden="true" />
        <div className="art-bottomline">
          <span>LEARNING BY BUILDING</span>
          <span>EST. IN CURIOSITY</span>
        </div>
      </div>

      <div className="hero-bottom">
        <span>
          BERBASIS DI <strong>{profile.location.toUpperCase()}</strong>
        </span>
        <span>
          <strong>{String(projects.length).padStart(2, "0")}</strong> PROYEK
          TERDOKUMENTASI
        </span>
        <a href="#projects">
          SCROLL UNTUK EKSPLORASI <FiArrowDown aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
