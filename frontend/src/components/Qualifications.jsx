import "./Qualifications.css";

export default function Qualifications({ qualifications }) {
  return (
    <section id="qualifications" className="section qualifications alt-section">
      <div className="container">
        <h2 className="section-title">Qualifications</h2>
        <p className="section-subtitle">My academic background and certifications.</p>
        <div className="timeline">
          {qualifications.map((item, index) => (
            <article key={index} className="card timeline-item">
              <span className="timeline-period">{item.period}</span>
              <h3>{item.degree}</h3>
              <p className="timeline-institution">{item.institution}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
