import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <Router>
      <Navbar name={portfolio.profile.name} />
      <Routes>
        <Route path="/" element={<Profile profile={portfolio.profile} />} />
        <Route path="/skills" element={<Skills skills={portfolio.skills} />} />
        <Route
          path="/qualifications"
          element={<Qualifications qualifications={portfolio.qualifications} />}
        />
        <Route path="/projects" element={<Projects projects={portfolio.projects} />} />
        <Route path="/contact" element={<Contact contact={portfolio.contact} />} />
      </Routes>
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} {portfolio.profile.name}</p>
        </div>
      </footer>
    </Router>
  );
}
