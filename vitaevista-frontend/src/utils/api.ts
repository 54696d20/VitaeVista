import axios from "axios";

const API_BASE_URL = "https://api.example.com"; // Replace with actual backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Mocked API Calls (Replace with real backend endpoints later)
export const uploadResume = async (file: File) => {
  console.log("Uploading resume:", file.name);
  return { success: true, message: "Resume uploaded successfully!" };
};

export const analyzeResume = async () => {
  console.log("Fetching AI resume analysis...");
  return {
    score: Math.floor(Math.random() * 30) + 70, // Random score (70-100)
    suggestions: [
      "Use more action-oriented language.",
      "Optimize section headings for clarity.",
      "Make formatting ATS-compliant.",
    ],
  };
};

export const getUserProfile = async () => {
  console.log("Fetching user profile...");
  return {
    name: "Tim Doe",
    email: "johndoe@example.com",
    plan: "Premium",
    renewalDate: "April 30, 2024",
  };
};

export default api;
