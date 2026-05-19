import { fallbackPortfolio } from "./fallbackData";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function fetchJson(path) {
  const response = await fetch(`${API_URL}${path}`);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}

export async function getPortfolio() {
  try {
    return await fetchJson("/api/portfolio");
  } catch {
    console.warn("API unavailable — using local portfolio data.");
    return fallbackPortfolio;
  }
}

export function submitContact(data) {
  return fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then(async (response) => {
    const body = await response.json();
    if (!response.ok) {
      throw new Error(body.error || "Failed to send message");
    }
    return body;
  });
}
