import { useEffect, useState } from "react";
import { getPortfolio } from "./api";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Qualifications from "./components/Qualifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPortfolio().then(setPortfolio).finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loader" />
        <p>Loading portfolio...</p>
      </div>
    );
  }

  if (!portfolio) {
    return <p className="error-banner">Unable to load portfolio.</p>;
  }

  return (
    <>
      <Navbar name={portfolio.profile.name} />
      <main>
        <Profile profile={portfolio.profile} />
        <Skills skills={portfolio.skills} />
        <Qualifications qualifications={portfolio.qualifications} />
        <Projects projects={portfolio.projects} />
        <Contact contact={portfolio.contact} />
      </main>
      <footer className="footer">
        <div className="container">
          <p>
            © {new Date().getFullYear()} {portfolio.profile.name}
          </p>
          <p className="footer-sub">
            Cloud Computing Assignment 1 — Vercel + Render
          </p>
        </div>
      </footer>
    </>
  );
}
