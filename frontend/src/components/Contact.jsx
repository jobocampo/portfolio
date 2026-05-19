import { useState } from "react";
import { submitContact } from "../api";
import "./Contact.css";

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
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Get in touch — messages are sent to the API.</p>
          <ul className="contact-info">
            <li>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <strong>Phone:</strong> {contact.phone}
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                Profile
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a href={contact.github} target="_blank" rel="noreferrer">
                Repositories
              </a>
            </li>
          </ul>
        </div>

        <form className="card contact-form" onSubmit={handleSubmit}>
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
    </section>
  );
}
