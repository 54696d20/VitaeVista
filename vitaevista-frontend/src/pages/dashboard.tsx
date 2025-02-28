import Head from 'next/head';
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Main Content */}
      <div className="flex flex-col flex-1 p-6">
        <Head>
          <title>Dashboard - VitaeVista</title>
          <meta name="description" content="Your AI-powered resume optimization dashboard." />
        </Head>

        <h1 className="text-3xl font-semibold text-gray-800">Dashboard</h1>
        <p className="mt-2 text-gray-600">Welcome to your AI resume optimization dashboard.</p>

        {/* Placeholder for AI Resume Summary */}
        <div className="mt-6 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Resume Overview</h2>
          <p className="mt-2 text-gray-600">Upload your resume to get started with AI analysis.</p>

          {/* Upload Button */}
          <div className="mt-4">
            <Link href="/upload" className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Upload Resume
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
