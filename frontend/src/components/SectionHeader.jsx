import "./SectionHeader.css";

export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <span className="section-label">Portfolio</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
}
