import { useState } from "react";
import { submitContact } from "../api";
import SectionHeader from "./SectionHeader";
import "./Contact.css";

const contactItems = [
  { key: "email", label: "Email", icon: "✉️", href: (c) => `mailto:${c.email}`, text: (c) => c.email },
  { key: "phone", label: "Phone", icon: "📱", text: (c) => c.phone },
  {
    key: "linkedin",
    label: "LinkedIn",
    icon: "💼",
    href: (c) => c.linkedin,
    text: () => "View profile",
    external: true,
  },
  {
    key: "github",
    label: "GitHub",
    icon: "🐙",
    href: (c) => c.github,
    text: () => "Repositories",
    external: true,
  },
];

export default function Contact({ contact }) {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSending(true);
    setStatus({ type: "", text: "" });

    try {
      const result = await submitContact(form);
      setStatus({ type: "success", text: result.message });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", text: err.message });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeader
          title="Contact"
          subtitle="Reach out — I'd love to connect about data science and opportunities."
        />
        <div className="contact-grid">
          <div className="contact-cards">
            {contactItems.map((item) => (
              <div key={item.key} className="contact-card">
                <span className="contact-card-icon">{item.icon}</span>
                <div>
                  <strong>{item.label}</strong>
                  {item.href ? (
                    <a
                      href={item.href(contact)}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noreferrer" : undefined}
                    >
                      {item.text(contact)}
                    </a>
                  ) : (
                    <p>{item.text(contact)}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form className="card contact-form" onSubmit={handleSubmit}>
            <h3 className="form-title">Send a message</h3>
            <label>
              Name
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message..."
              />
            </label>
            <button type="submit" className="btn" disabled={sending}>
              {sending ? "Sending..." : "Send Message"}
            </button>
            {status.text && (
              <p className={`form-status ${status.type}`}>{status.text}</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
