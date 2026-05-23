import SectionHeader from "./SectionHeader";
import "./Projects.css";

export default function Projects({ projects }) {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeader
          title="Projects"
          subtitle="Real-world data science and spatial analysis work."
        />
        <div className="grid project-grid">
          {projects.map((project, i) => (
            <article
              key={project.id}
              className="card project-card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {project.image && (
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} loading="lazy" />
                  <div className="project-image-overlay" />
                  <span className="project-badge">Featured</span>
                </div>
              )}
              <div className="project-body">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="tech-tags">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noreferrer" className="link-btn">
                    GitHub →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
