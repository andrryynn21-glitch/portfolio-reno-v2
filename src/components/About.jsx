import { FiArrowDownRight, FiDownload, FiMapPin } from "react-icons/fi";
import profile from "../data/profile";
import portrait from "../assets/images/profile.png";
import cvFile from "../assets/pdf/CV_Reno_Andrian.pdf";

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="container about-layout">
        <div className="about-portrait">
          <p className="eyebrow">THE HUMAN BEHIND THE BUILDS</p>
          <div className="portrait-frame">
            <img
              src={portrait}
              alt="Potret Reno Andrian"
              width="500"
              height="500"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="portrait-caption">
            <span>Reno Andrian</span>
            <FiArrowDownRight aria-hidden="true" />
          </div>
          <p className="portrait-location">
            <FiMapPin aria-hidden="true" /> {profile.location}, Indonesia
          </p>
        </div>
        <div className="about-copy">
          <p className="eyebrow">02 / SEDIKIT TENTANG SAYA</p>
          <h2 id="about-heading">
            Seorang mahasiswa.
            <br />
            Banyak rasa ingin tahu.
            <br />
            <em>Selalu ingin membuat.</em>
          </h2>
          <p>{profile.about}</p>
          <p>
            Saya tidak membatasi diri pada satu label pengembang. Saya ingin
            memahami sebuah kebutuhan, mengeksplorasi solusinya dengan bantuan
            AI, lalu mewujudkannya menjadi website atau aplikasi yang bisa
            digunakan.
          </p>
          <blockquote>
            "AI membantu membuka kemungkinan.
            <br />
            Rasa ingin tahu membuat saya terus melangkah."
          </blockquote>
          <div className="about-footer">
            <span>
              MAHASISWA SISTEM INFORMASI
              <br />
              <strong>Universitas Pamulang</strong>
            </span>
            <a
              className="button button-outline"
              href={cvFile}
              download="CV_Reno_Andrian.pdf"
            >
              Unduh CV <FiDownload aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
