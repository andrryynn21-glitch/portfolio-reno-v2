import {
  FiArrowRight,
  FiCode,
  FiCompass,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";
import skills from "../data/skills";

const steps = [
  {
    title: "Pahami kebutuhannya",
    icon: FiCompass,
    text: "Mulai dari masalah, siapa penggunanya, dan hal yang ingin dibuat lebih mudah.",
  },
  {
    title: "Eksplorasi dengan AI",
    icon: FiLayers,
    text: "Gunakan AI untuk berdiskusi, mengurai ide, dan menjelajahi alternatif solusi.",
  },
  {
    title: "Wujudkan bertahap",
    icon: FiCode,
    text: "Terjemahkan ide menjadi antarmuka, logika, dan data. Pelajari bagian yang belum dipahami.",
  },
  {
    title: "Tinjau & perbaiki",
    icon: FiCheckCircle,
    text: "Hasil AI bukan titik akhir. Periksa alurnya, uji penggunaannya, dan perbaiki kekurangannya.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section approach-section container"
      aria-labelledby="skills-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">03 / PENDEKATAN & PERANGKAT</p>
          <h2 id="skills-heading">
            Dibantu AI.
            <br />
            <em>Digerakkan rasa ingin tahu.</em>
          </h2>
        </div>
        <p>
          AI-assisted building adalah cara saya mengeksplorasi pengembangan
          produk, bukan klaim membangun model AI. Ini prinsip yang ingin saya
          bawa ke setiap prosesnya.
        </p>
      </div>
      <ol className="workflow">
        {steps.map(({ title, icon: Icon, text }, index) => (
          <li key={title}>
            <div className="step-top">
              <Icon aria-hidden="true" />
              <span>0{index + 1}</span>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            {index < steps.length - 1 && (
              <FiArrowRight className="step-arrow" aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
      <div className="toolkit-heading">
        <h3>Teknologi di balik karya</h3>
        <p>Dipilih sesuai kebutuhan, diperdalam lewat praktik.</p>
      </div>
      <div className="toolkit-grid">
        {skills.map((skill) => (
          <div className="toolkit-item" key={skill.title}>
            <h4>{skill.title}</h4>
            <p>{skill.description}</p>
            <ul className="tech-list">
              {skill.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
