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
