import "./Skills.css";

export default function Skills({ skills }) {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="section skills alt-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Data science, cloud, web development, GIS, and AI tools.
        </p>
        {categories.map((category) => (
          <div key={category} className="skill-group">
            <h3>{category}</h3>
            <div className="grid skill-grid">
              {skills
                .filter((s) => s.category === category)
                .map((skill) => (
                  <article key={skill.name} className="card skill-card">
                    <div className="skill-header">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-fill"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
