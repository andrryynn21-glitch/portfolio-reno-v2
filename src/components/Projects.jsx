import { useState } from "react";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";
import projects from "../data/projects";

const filters = ["Semua", "Website", "Aplikasi"];
const statusLabels = {
  completed: "Selesai",
  development: "Dalam pengembangan",
  published: "Tayang publik",
};

export default function Projects() {
  const [filter, setFilter] = useState("Semua");
  const visibleProjects = projects.filter(
    (project) => filter === "Semua" || project.category === filter,
  );

  return (
    <section
      id="projects"
      className="section projects-section container"
      aria-labelledby="projects-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / PILIHAN KARYA</p>
          <h2 id="projects-heading">
            Lebih dari ide.
            <br />
            <em>Ini yang saya bangun.</em>
          </h2>
        </div>
        <p>
          Website bisnis, aplikasi operasional, sampai eksplorasi pribadi.
          Setiap proyek adalah ruang untuk belajar dan menyelesaikan kebutuhan
          yang berbeda.
        </p>
      </div>
      <div className="project-toolbar">
        <div
          className="project-filters"
          role="group"
          aria-label="Filter kategori proyek"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              <span>
                {item === "Semua"
                  ? projects.length
                  : projects.filter((p) => p.category === item).length}
              </span>
            </button>
          ))}
        </div>
        <span className="project-count" role="status">
          {visibleProjects.length} karya ditampilkan
        </span>
      </div>
      <div className="projects-grid">
        {visibleProjects.map((project) => (
          <article
            className={`project-card project-${project.id}`}
            key={project.id}
          >
            <div className="project-visual">
              <span className={`project-status ${project.status}`}>
                <span />
                {statusLabels[project.status]}
              </span>
              {project.image ? (
                <a
                  className="project-image-frame"
                  href={project.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Buka tangkapan layar ${project.title}`}
                >
                  <div className="project-image-bar">
                    <i />
                    <i />
                    <i />
                  </div>
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="450"
                  />
                </a>
              ) : (
                <div
                  className="portfolio-art"
                  aria-label="Identitas visual portofolio Reno"
                >
                  <div>
                    reno<span>.</span>
                    <small>PORTFOLIO / 2026</small>
                  </div>
                  <p>
                    Curiosity.
                    <br />
                    <em>Meet possibility.</em>
                  </p>
                  <span className="portfolio-art-footer">
                    IDE JADI NYATA. <FiArrowUpRight aria-hidden="true" />
                  </span>
                </div>
              )}
              <span className="project-number" aria-hidden="true">
                {String(projects.indexOf(project) + 1).padStart(2, "0")}
              </span>
            </div>
            {project.imageCapturedAt && (
              <p className="project-capture">
                <span>Tangkapan layar asli / klik gambar</span>
                <time dateTime={project.imageCapturedAt}>
                  {new Date(
                    `${project.imageCapturedAt}T00:00:00Z`,
                  ).toLocaleDateString("id-ID", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                    timeZone: "UTC",
                  })}
                </time>
              </p>
            )}
            <div className="project-content">
              <p className="eyebrow project-category">{project.label}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              {project.tech.length > 0 && (
                <ul
                  className="tech-list"
                  aria-label={`Teknologi ${project.title}`}
                >
                  {project.tech.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
              )}
              <details className="project-details">
                <summary>
                  Tentang proyek <FiPlus aria-hidden="true" />
                </summary>
                <div className="project-case">
                  <h4>Kebutuhan</h4>
                  <p>{project.problem}</p>
                  <h4>Pendekatan</h4>
                  <p>{project.solution}</p>
                  <h4>
                    {project.featuresLabel ||
                      (project.status === "development"
                        ? "Cakupan pengembangan"
                        : "Fitur utama")}
                  </h4>
                  <ul>
                    {project.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p className="project-note">{project.note}</p>
                </div>
              </details>
              <div className="project-link-row">
                {project.demo ? (
                  <a
                    href={project.demo}
                    className="text-link"
                    {...(project.demo.startsWith("https:")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={`${project.id === "portfolio" ? "Kembali ke beranda" : "Lihat website"}: ${project.title}`}
                  >
                    {project.id === "portfolio"
                      ? "Anda sedang di sini"
                      : project.status === "development"
                        ? "Lihat pratinjau"
                        : "Lihat website"}
                    <FiArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  <span className="no-demo">Demo publik belum tersedia</span>
                )}
                <span className="project-kind">{project.category}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="projects-note">
        Karya ditampilkan sesuai tahap pengembangannya. Tidak semua proyek
        memiliki demo publik.
      </p>
    </section>
  );
}
