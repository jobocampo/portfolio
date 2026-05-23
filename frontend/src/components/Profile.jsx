import "./Profile.css";

export default function Profile({ profile }) {
  return (
    <section id="profile" className="section profile">
      <div className="profile-bg" aria-hidden="true" />
      <div className="container profile-grid">
        <div className="profile-text">
          <p className="eyebrow">Personal Profile</p>
          <h1>{profile.name}</h1>
          <p className="profile-title">{profile.title}</p>
          <div className="profile-tags">
            <span className="tag tag-cyan">Data Science</span>
            <span className="tag tag-violet">Machine Learning</span>
            <span className="tag tag-pink">Analytics</span>
          </div>
          <p className="profile-bio">{profile.bio}</p>
          {profile.education && (
            <p className="profile-education">🎓 {profile.education}</p>
          )}
          <p className="profile-location">📍 {profile.location}</p>
          <div className="profile-actions">
            <a href="#projects" className="btn">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="profile-image-wrap">
          <div className="profile-image-ring" />
          <img src={"/profile.jpeg"} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}
