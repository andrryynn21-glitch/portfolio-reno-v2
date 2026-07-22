import "../styles/Contact.css";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import SectionTitle from "./common/SectionTitle";
import profile from "../data/profile";
import {
  FaEnvelope,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");

      form.current.reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message.");
    }

    setLoading(false);
  };
  return (
    <section id="contact" className="contact">
      <SectionTitle badge="CONTACT" title="Let's Work Together">
        Saya terbuka untuk peluang kerja, freelance, maupun kolaborasi dalam
        pengembangan website modern. Jangan ragu menghubungi saya apabila
        memiliki project atau ingin berdiskusi.
      </SectionTitle>

      <div className="contact-wrapper">
        {/* LEFT */}

        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>Get In Touch</h3>

          <p>
            Saya selalu antusias terhadap kesempatan baru, baik untuk bekerja
            sama dalam project, freelance, maupun posisi Frontend Developer.
          </p>

          <div className="contact-items">
            <a className="contact-item" href="mailto:andrryynn212@gmail.com">
              <div className="contact-icon">
                <FaEnvelope />
              </div>

              <div>
                <small>Email</small>

                <span>{profile.email}</span>
              </div>
            </a>

            <a
              className="contact-item"
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <FaWhatsapp />
              </div>

              <div>
                <small>WhatsApp</small>

                <span>{profile.phone}</span>
              </div>
            </a>

            <a
              className="contact-item"
              href={`https://maps.google.com/?q=${encodeURIComponent(profile.location)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>

              <div>
                <small>Location</small>

                <span>{profile.location}</span>
              </div>
            </a>
          </div>

          <div className="contact-social">
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="availability">
            <span className="status-dot"></span>
            Available for Freelance & Full Time
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="input-group">
            <label>Nama</label>

            <input
              type="text"
              name="name"
              placeholder="Masukkan nama Anda"
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              required
            />{" "}
          </div>

          <div className="input-group">
            <label>Pesan</label>

            <textarea
              name="message"
              rows="6"
              placeholder="Tulis pesan Anda..."
              required
            />
          </div>

          <button type="submit" className="send-btn" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
