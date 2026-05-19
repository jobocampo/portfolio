import "./Navbar.css";

const links = [
  { href: "#profile", label: "Profile" },
  { href: "#skills", label: "Skills" },
  { href: "#qualifications", label: "Qualifications" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ name }) {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#profile" className="logo">
          {name.split(" ")[0]}
          <span>.</span>
        </a>
        <nav>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
