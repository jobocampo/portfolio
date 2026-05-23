import "./Skills.css";

const categoryMeta = {
  "Data Analysis": { icon: "📊", color: "#38bdf8" },
  "Machine Learning": { icon: "🧠", color: "#818cf8" },
  "Cloud Computing": { icon: "☁️", color: "#34d399" },
  "Web Development": { icon: "💻", color: "#f472b6" },
};

export default function Skills({ skills }) {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="section skills alt-section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Data analysis, machine learning, cloud, and web development.
        </p>
        {categories.map((category) => {
          const meta = categoryMeta[category] || { icon: "✦", color: "#38bdf8" };
          return (
            <div key={category} className="skill-group">
              <div
                className="skill-group-header"
                style={{ "--cat-color": meta.color }}
              >
                <span className="skill-icon" aria-hidden="true">
                  {meta.icon}
                </span>
                <h3>{category}</h3>
              </div>
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
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${meta.color}, var(--accent-2))`,
                          }}
                        />
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
