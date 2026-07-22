import "./SectionTitle.css";
import { motion } from "framer-motion";

function SectionTitle({ badge, title, children }) {
  return (
    <motion.div
      className="section-title"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <span className="section-badge">{badge}</span>

      <h2>{title}</h2>

      <p>{children}</p>
    </motion.div>
  );
}

export default SectionTitle;
