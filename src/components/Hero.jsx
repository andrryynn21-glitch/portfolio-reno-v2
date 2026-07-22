import "./../styles/Hero.css";

import profile from "../data/profile";

import profileImage from "../assets/images/profile.png";
import cvFile from "../assets/pdf/CV_Reno_Andrian.pdf";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "./common/Button";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
} from "react-icons/fa";

import { fadeUp, staggerContainer } from "../animations/variants";
function Hero() {
  return (
    <section id="home" className="hero">
      {/* ================= LEFT ================= */}

      <motion.div
        className="hero-left"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-badge" variants={fadeUp}>
          <span className="dot"></span>
          AVAILABLE FOR INTERNSHIP
        </motion.div>

        <motion.h1 variants={fadeUp}>
          {profile.name.split(" ")[0]}{" "}
          <span className="gold">
            {profile.name.split(" ").slice(1).join(" ")}
          </span>
        </motion.h1>

        <motion.h2 variants={fadeUp}>
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "React Developer",
              2000,
              "UI Developer",
              2000,
              "Information Systems Student",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </motion.h2>

        <motion.p variants={fadeUp}>{profile.description}</motion.p>

        <motion.div className="hero-buttons" variants={fadeUp}>
          {" "}
          <Button href={cvFile} download variant="primary">
            <FaDownload />
            Download CV
          </Button>
          <a href="#projects" className="btn-secondary">
            <span>View Projects</span>
            <FaArrowRight />
          </a>
        </motion.div>
        <motion.div className="hero-socials" variants={fadeUp}>
          {" "}
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Github Profile"
          >
            <FaGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram Profile"
          >
            <FaInstagram />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Send Email">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>

      {/* ================= RIGHT ================= */}

      <motion.div
        className="hero-right"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        // Floating Animation
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          opacity: 1,
        }}
      >
        <motion.div
          className="profile-card"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 1.5, 0, -1.5, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="profile-glow"></div>

          <img src={profileImage} alt={profile.name} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
