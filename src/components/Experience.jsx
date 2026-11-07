import experience from "../data/experience";
import { FiAperture } from "react-icons/fi";

export default function Experience() {
  return (
    <section
      id="experience"
      className="section experience-section container"
      aria-labelledby="experience-heading"
    >
      <div className="journey-intro">
        <p className="eyebrow">04 / PERJALANAN BELAJAR</p>
        <h2 id="experience-heading">
          Setiap langkah,
          <br />
          <em>bekal yang baru.</em>
        </h2>
        <p>
          Belajar tidak hanya dari layar. Pendidikan dan pengalaman lapangan
          membentuk cara saya memahami masalah dan bekerja dengan tanggung
          jawab.
        </p>
        <FiAperture className="journey-star" aria-hidden="true" />
      </div>
      <ol className="timeline">
        {experience.map((item) => (
          <li key={item.id}>
            <div className="timeline-meta">
              <span>{item.year}</span>
              <span>{item.type}</span>
            </div>
            <h3>{item.title}</h3>
            <p className="timeline-company">{item.company}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
