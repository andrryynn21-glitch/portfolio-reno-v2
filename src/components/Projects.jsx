import "../styles/Projects.css";

import projects from "../data/projects";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import SectionTitle from "./common/SectionTitle";
function Projects() {
  return (
    <section id="projects" className="projects">
      {/* ================= TITLE ================= */}

      <SectionTitle badge="PORTFOLIO" title="Featured Projects">
        Berikut beberapa project yang saya kembangkan menggunakan React,
        JavaScript, PHP, MySQL, serta teknologi web modern dengan fokus pada
        performa, desain premium, dan pengalaman pengguna yang responsif.
      </SectionTitle>

      {/* ================= GRID ================= */}

      <div className="projects-grid">
        {projects.map((project, index) => (
          <Tilt
            key={project.id}
            tiltMaxAngleX={8}
            tiltMaxAngleY={8}
            perspective={1200}
            scale={1.02}
            transitionSpeed={1200}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="#ffffff"
            glarePosition="all"
          >
            <motion.div
              className="project-card"
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{
                once: true,
              }}
            >
              {/* IMAGE */}

              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                />

                <div className="project-overlay">
                  <h4>{project.title}</h4>

                  {project.status === "completed" ? (
                    <span className="project-status completed">
                      ● Completed
                    </span>
                  ) : (
                    <span className="project-status development">
                      ● In Development
                    </span>
                  )}
                </div>
              </div>

              {/* CONTENT */}

              <div className="project-content">
                <span className="project-category">{project.category}</span>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">{project.description}</p>

                {/* TECH */}

                <div className="tech-stack">
                  {project.tech.map((item, index) => (
                    <span key={index} className="tech">
                      {item}
                    </span>
                  ))}
                </div>

                {/* BUTTON */}

                <div className="project-links">
                  {project.github && (
                    <a
                      className="project-btn"
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaGithub />
                      Github
                    </a>
                  )}

                  {project.demo && (
                    <a
                      className="project-btn"
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Projects;
