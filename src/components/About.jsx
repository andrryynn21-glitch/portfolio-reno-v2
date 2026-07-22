import "../styles/About.css";

import profile from "../data/profile";
import aboutImage from "../assets/images/about/about.png";

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

import { fadeUp } from "../animations/variants";

function About() {
  return (
    <section id="about" className="about">
      {/* Background Glow */}
      <div className="about-glow"></div>

      <div className="about-container">
        {/* ================= LEFT ================= */}

        <motion.div
          className="about-image-wrapper"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="about-image-card">
            <img src={aboutImage} alt={profile.name} />
          </div>
        </motion.div>

        {/* ================= RIGHT ================= */}

        <motion.div
          className="about-content"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="about-subtitle">ABOUT ME</span>

          <h2>
            Passionate Frontend Developer &
            <span className="gold"> Information Systems Student</span>
          </h2>

          <p>{profile.about}</p>

          {/* Highlight */}

          <div className="about-highlights">
            {profile.highlights.map((item, index) => (
              <motion.div
                key={index}
                className="highlight-card"
                whileHover={{
                  y: -6,
                  scale: 1.03,
                }}
              >
                <FaCheckCircle />

                <span>{item}</span>
              </motion.div>
            ))}
          </div>

          {/* Stats */}

          <div className="about-stats">
            {profile.stats.map((item, index) => (
              <motion.div
                key={index}
                className="stat-card"
                whileHover={{
                  y: -8,
                  scale: 1.04,
                }}
              >
                <h3>{item.number}</h3>

                <span>{item.title}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
