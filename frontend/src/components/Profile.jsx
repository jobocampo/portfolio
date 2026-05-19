import "./Profile.css";

export default function Profile({ profile }) {
  return (
    <section id="profile" className="section profile">
      <div className="container profile-grid">
        <div className="profile-text">
          <p className="eyebrow">Personal Profile</p>
          <h1>{profile.name}</h1>
          <p className="profile-title">{profile.title}</p>
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
        <div className="profile-image-wrap card">
          <img src={profile.image} alt={profile.name} />
        </div>
      </div>
    </section>
  );
}
