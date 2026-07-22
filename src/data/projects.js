import yammatcha from "../assets/images/projects/yammatcha.webp";
import portfolio from "../assets/images/projects/portfolio.webp";
import kasir from "../assets/images/projects/kasir.webp";
import invitation from "../assets/images/projects/invitation.webp";

const projects = [
  {
    id: 1,

    title: "Website UMKM Yammatcha",

    category: "Business Website",

    status: "completed",

    description:
      "Website resmi UMKM Yammatcha yang dirancang untuk memperkuat branding bisnis, menampilkan menu, galeri, informasi usaha, serta memudahkan pelanggan menghubungi bisnis melalui WhatsApp.",

    tech: ["HTML", "CSS", "JavaScript"],

    github: "https://andrryynn21-glitch.github.io/yammatcha-website/",

    demo: null,

    image: yammatcha,
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Frontend Development",

    description:
      "Website portfolio modern menggunakan React.js, Framer Motion, serta desain premium yang responsif.",

    tech: ["React", "CSS", "Framer Motion"],

    github: null,

    demo: null,

    image: portfolio,
  },

  {
    id: 3,
    title: "Aplikasi Kasir UMKM",

    category: "Web Application",

    status: "completed",

    description:
      "Aplikasi kasir berbasis web dengan fitur transaksi, laporan penjualan, manajemen produk, dan dashboard admin.",

    tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],

    github: null,

    demo: null,

    image: kasir,
  },

  {
    id: 4,
    title: "Website Undangan Digital",

    category: "React Development",

    status: "development",

    description:
      "Website undangan digital premium dengan animasi modern, countdown, RSVP, galeri foto, musik, dan responsive layout.",

    tech: ["React", "Vite", "Framer Motion"],

    github: null,

    demo: null,

    image: invitation,
  },
];

export default projects;
