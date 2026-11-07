import { useState } from "react";
import {
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";
import profile from "../data/profile";

const emailConfigured = Boolean(
  import.meta.env.VITE_EMAILJS_SERVICE_ID &&
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID &&
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
);

export default function Contact() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [copyStatus, setCopyStatus] = useState("");
  const loading = status.type === "sending";

  async function sendMessage(event) {
    event.preventDefault();
    if (loading) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    if (!["name", "email", "message"].every((key) => data.get(key)?.trim())) {
      setStatus({
        type: "error",
        message: "Lengkapi nama, email, dan pesan dengan teks yang valid.",
      });
      return;
    }
    if (!emailConfigured) {
      const subject = encodeURIComponent(
        `Pesan portofolio dari ${data.get("name").trim()}`,
      );
      const body = encodeURIComponent(
        `${data.get("message").trim()}\n\n${data.get("name").trim()}\n${data.get("email").trim()}`,
      );
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus({
        type: "draft",
        message:
          "Draf dibuka di aplikasi email Anda, belum dikirim. Jika tidak terbuka, gunakan tautan email atau WhatsApp di samping.",
      });
      return;
    }
    setStatus({ type: "sending", message: "Sedang mengirim pesan..." });
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      form.reset();
      setStatus({
        type: "success",
        message: "Pesan berhasil dikirim. Terima kasih sudah menghubungi saya.",
      });
    } catch {
      setStatus({
        type: "error",
        message:
          "Pesan belum terkirim. Silakan coba lagi atau hubungi saya langsung melalui email / WhatsApp. Pesan Anda tetap tersimpan di formulir.",
      });
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Alamat email disalin.");
    } catch {
      setCopyStatus(
        `Tidak dapat menyalin otomatis. Alamat email: ${profile.email}`,
      );
    }
  }

  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="container contact-layout">
        <div className="contact-copy">
          <p className="eyebrow">05 / MULAI PERCAKAPAN</p>
          <h2 id="contact-heading">
            Punya ide?
            <br />
            <em>Mari buat berarti.</em>
          </h2>
          <p>
            Saya terbuka untuk peluang magang, kolaborasi proyek, dan percakapan
            seputar teknologi. Ceritakan apa yang sedang Anda bangun.
          </p>
          <div className="availability">
            <span /> Terbuka untuk magang & kolaborasi
          </div>
          <div className="contact-email">
            <a href={`mailto:${profile.email}`}>
              {profile.email}
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <button
              className="icon-button"
              type="button"
              onClick={copyEmail}
              aria-label="Salin alamat email"
            >
              {copyStatus === "Alamat email disalin." ? (
                <FiCheck aria-hidden="true" />
              ) : (
                <FiCopy aria-hidden="true" />
              )}
            </button>
          </div>
          <p className="copy-status" role="status">
            {copyStatus}
          </p>
          <div className="contact-links">
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp <FiArrowUpRight aria-hidden="true" />
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              <FiGithub aria-hidden="true" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn
            </a>
          </div>
        </div>
        <form
          className="contact-form"
          onSubmit={sendMessage}
          aria-busy={loading}
          aria-describedby="form-note"
        >
          <h3>Satu pesan, banyak kemungkinan.</h3>
          <p id="form-note">
            {emailConfigured
              ? "Pesan Anda dikirim melalui EmailJS. Nama dan email digunakan untuk membalas pesan."
              : "Formulir ini menyiapkan draf di aplikasi email Anda. Anda yang mengirimkannya."}
          </p>
          <div className="form-field">
            <label htmlFor="contact-name">Nama Anda</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Siapa nama Anda?"
              required
              minLength={2}
              maxLength={100}
              readOnly={loading}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-email">Alamat email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="nama@perusahaan.com"
              required
              maxLength={254}
              readOnly={loading}
            />
          </div>
          <div className="form-field">
            <label htmlFor="contact-message">
              Apa yang ingin Anda diskusikan?
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              placeholder="Tentang ide, proyek, atau peluang kolaborasi..."
              required
              minLength={10}
              maxLength={5000}
              readOnly={loading}
            />
          </div>
          <button
            className="button button-lime"
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Mengirim pesan..."
              : emailConfigured
                ? "Kirim pesan"
                : "Buka aplikasi email"}
            <FiMail aria-hidden="true" />
          </button>
          <p
            className={`form-status ${status.type}`}
            role="status"
            aria-live="polite"
          >
            {status.message}
          </p>
        </form>
      </div>
    </section>
  );
}
