import SectionHeader from "./SectionHeader";
import "./Qualifications.css";

const accentColors = ["#38bdf8", "#a78bfa", "#34d399"];

export default function Qualifications({ qualifications }) {
  return (
    <section id="qualifications" className="section qualifications">
      <div className="container">
        <SectionHeader
          title="Qualifications"
          subtitle="My academic background and professional development."
        />
        <div className="timeline">
          {qualifications.map((item, index) => (
            <article
              key={index}
              className="card timeline-item"
              style={{ "--accent-line": accentColors[index % accentColors.length] }}
            >
              {item.image && (
                <img
                  className="timeline-icon"
                  src={item.image}
                  alt=""
                  loading="lazy"
                />
              )}
              <div className="timeline-content">
                <span className="timeline-period">{item.period}</span>
                <h3>{item.degree}</h3>
                <p className="timeline-institution">{item.institution}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
