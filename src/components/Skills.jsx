import "../styles/Skills.css";

import skills from "../data/skills";

import { motion } from "framer-motion";
import SectionTitle from "./common/SectionTitle";
function Skills() {
  return (
    <section id="skills" className="skills">
      <SectionTitle badge="MY SKILLS" title="Technology & Tools">
        Beberapa teknologi yang saya gunakan dalam membangun website modern,
        responsive, dan scalable.
      </SectionTitle>

      <div className="skills-wrapper">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
          >
            <div className="skill-header">
              <h3>{skill.title}</h3>

              <span>{skill.percentage}%</span>
            </div>

            <div className="progress">
              <motion.div
                className="progress-fill"
                initial={{ width: 0 }}
                whileInView={{
                  width: `${skill.percentage}%`,
                }}
                transition={{
                  duration: 1.4,
                }}
                viewport={{ once: true }}
              />
            </div>

            <div className="skill-icons">
              {skill.items.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={idx}
                    className="skill-icon"
                    whileHover={{
                      y: -8,
                      scale: 1.08,
                    }}
                  >
                    <Icon />

                    <span>{item.name}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
