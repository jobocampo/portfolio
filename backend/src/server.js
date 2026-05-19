const express = require("express");
const cors = require("cors");
const portfolio = require("./data");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigins = [
  "http://localhost:5173",
  "http://127.0.0.1:5173",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, true);
      }
    },
  })
);
app.use(express.json());

const messages = [];

app.get("/", (_req, res) => {
  res.json({
    name: "Job Philipo Ochuma Portfolio API",
    status: "running",
    endpoints: [
      "/api/health",
      "/api/portfolio",
      "/api/profile",
      "/api/skills",
      "/api/qualifications",
      "/api/projects",
      "/api/contact",
    ],
  });
});

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", message: "Portfolio API is running" });
});

app.get("/api/portfolio", (_req, res) => {
  res.json(portfolio);
});

app.get("/api/profile", (_req, res) => {
  res.json(portfolio.profile);
});

app.get("/api/skills", (_req, res) => {
  res.json(portfolio.skills);
});

app.get("/api/qualifications", (_req, res) => {
  res.json(portfolio.qualifications);
});

app.get("/api/projects", (_req, res) => {
  res.json(portfolio.projects);
});

app.get("/api/contact", (_req, res) => {
  res.json(portfolio.contact);
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({
      success: false,
      error: "Name, email, and message are required.",
    });
  }

  const entry = {
    id: messages.length + 1,
    name: name.trim(),
    email: email.trim(),
    message: message.trim(),
    receivedAt: new Date().toISOString(),
  };

  messages.push(entry);

  res.status(201).json({
    success: true,
    message: "Thank you! Your message has been received.",
    data: entry,
  });
});

app.get("/api/messages", (_req, res) => {
  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`Portfolio API listening on port ${PORT}`);
});
