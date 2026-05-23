import SectionHeader from "./SectionHeader";
import "./Skills.css";

const categoryMeta = {
  "Data Analysis": { icon: "📊", gradient: "linear-gradient(135deg, #0ea5e9, #38bdf8)" },
  "Machine Learning": { icon: "🧠", gradient: "linear-gradient(135deg, #8b5cf6, #a78bfa)" },
  "Cloud Computing": { icon: "☁️", gradient: "linear-gradient(135deg, #10b981, #34d399)" },
  "Web Development": { icon: "💻", gradient: "linear-gradient(135deg, #ec4899, #f472b6)" },
};

export default function Skills({ skills }) {
  const categories = [...new Set(skills.map((s) => s.category))];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeader
          title="Skills"
          subtitle="Data analysis, machine learning, cloud, and web development."
        />
        {categories.map((category) => {
          const meta = categoryMeta[category] || {
            icon: "✦",
            gradient: "linear-gradient(135deg, #38bdf8, #a78bfa)",
          };
          return (
            <div key={category} className="skill-group">
              <div className="skill-group-header" style={{ background: meta.gradient }}>
                <span className="skill-icon" aria-hidden="true">
                  {meta.icon}
                </span>
                <h3>{category}</h3>
              </div>
              <div className="grid skill-grid">
                {skills
                  .filter((s) => s.category === category)
                  .map((skill) => (
                    <article
                      key={skill.name}
                      className="card skill-card"
                      style={{ "--skill-gradient": meta.gradient }}
                    >
                      <div className="skill-header">
                        <span>{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div
                          className="skill-fill"
                          style={{
                            width: `${skill.level}%`,
                            background: meta.gradient,
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
