import "../styles/Experience.css";

import experience from "../data/experience";

import { motion } from "framer-motion";

function Experience() {
  return (
    <section id="experience" className="experience">
      {/* ================= TITLE ================= */}

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span>MY JOURNEY</span>

        <h2>Experience</h2>

        <p className="experience-description">
          Perjalanan saya dalam mempelajari pengembangan website, membangun
          berbagai project, hingga memperoleh pengalaman melalui kegiatan magang
          dan project pribadi.
        </p>
      </motion.div>

      {/* ================= TIMELINE ================= */}

      <div className="timeline">
        {experience.map((item, index) => (
          <motion.div
            key={item.id}
            className="timeline-item"
            initial={{
              opacity: 0,
              y: 70,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: index * 0.15,
            }}
            viewport={{ once: true }}
          >
            {/* DOT */}

            <div className="timeline-dot"></div>

            {/* CARD */}

            <div className="timeline-card">
              <span className="timeline-year">{item.year}</span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

              <div className="timeline-tech">
                {item.tech.map((tech, index) => (
                  <span key={index}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
