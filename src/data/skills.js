import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPhp,
  FaGitAlt,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import { SiMysql, SiVite } from "react-icons/si";

import { FaCode } from "react-icons/fa";

const skills = [
  {
    title: "Frontend Development",
    percentage: 90,
    items: [
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "JavaScript", icon: FaJs },
      { name: "React", icon: FaReact },
      { name: "Vite", icon: SiVite },
    ],
  },

  {
    title: "Backend Development",
    percentage: 75,
    items: [
      { name: "PHP", icon: FaPhp },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "Tools",
    percentage: 88,
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "Github", icon: FaGithub },
      {
        name: "VS Code",
        icon: FaCode,
      },
      { name: "Figma", icon: FaFigma },
    ],
  },
];

export default skills;
