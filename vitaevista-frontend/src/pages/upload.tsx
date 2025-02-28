import Head from "next/head";
import { useState } from "react";
import { uploadResume } from "../utils/api";

export default function Upload() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    setMessage("");

    try {
      const response = await uploadResume(file);
      setMessage(response.message);
    } catch (error) {
      console.error("Upload failed:", error); // Log the error for debugging
      setMessage("Error uploading resume. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Head>
        <title>Upload Resume - VitaeVista</title>
        <meta name="description" content="Upload your resume for AI-powered optimization." />
      </Head>

      <h1 className="text-3xl font-semibold text-gray-800">Upload Your Resume</h1>
      <p className="mt-2 text-gray-600">Select a file to begin the AI analysis.</p>

      <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-md text-center">
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="block w-full text-sm text-gray-500" />
        {file && <p className="mt-3 text-sm text-gray-700">Selected: {file.name}</p>}

        <button
          onClick={handleUpload}
          className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400"
          disabled={!file || loading}
        >
          {loading ? "Uploading..." : "Upload Resume"}
        </button>

        {message && <p className="mt-3 text-sm text-gray-700">{message}</p>}
      </div>
    </div>
  );
}
