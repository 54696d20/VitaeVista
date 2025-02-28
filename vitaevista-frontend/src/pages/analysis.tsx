import Head from "next/head";
import { useState } from "react";
import { analyzeResume } from "../utils/api";

export default function Analysis() {
  const [resumeScore, setResumeScore] = useState<number | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchAnalysis = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await analyzeResume();
      setResumeScore(response.score);
      setSuggestions(response.suggestions);
    } catch (err) {
      console.error("Error fetching resume analysis:", err);
      setError("Failed to fetch AI resume analysis. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Head>
        <title>AI Resume Analysis - VitaeVista</title>
        <meta name="description" content="View AI-generated resume improvements." />
      </Head>

      <h1 className="text-3xl font-semibold text-gray-800">AI Resume Analysis</h1>
      <p className="mt-2 text-gray-600">See how your resume ranks and apply AI-powered improvements.</p>

      {/* Fetch AI Analysis Button */}
      <button
        onClick={fetchAnalysis}
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Fetch AI Analysis"}
      </button>

      {/* Error Message */}
      {error && <p className="mt-3 text-red-500">{error}</p>}

      {/* Resume Score */}
      {resumeScore !== null && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-md text-center">
          <h2 className="text-xl font-semibold text-gray-800">Resume Score</h2>
          <p className={`mt-3 text-4xl font-bold ${resumeScore > 75 ? "text-green-500" : "text-red-500"}`}>
            {resumeScore}/100
          </p>
        </div>
      )}

      {/* AI Suggestions */}
      {suggestions.length > 0 && (
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold text-gray-800">AI Suggestions</h2>
          <ul className="mt-3 text-gray-700 list-disc list-inside">
            {suggestions.map((suggestion, index) => (
              <li key={index}>{suggestion}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
