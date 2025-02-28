import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 text-center">
      {/* Hero Section */}
      <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
        Optimize Your Resume with AI
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl">
        VitaeVista helps job seekers improve their resumes with AI-driven analysis and optimization, increasing their chances of landing interviews.
      </p>

      {/* CTA Buttons */}
      <div className="mt-6 flex space-x-4">
        <Link href="/signup">
          <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition">
            Get Started for Free
          </button>
        </Link>
        <Link href="/login">
          <button className="px-6 py-3 bg-gray-300 text-gray-800 text-lg font-semibold rounded-lg hover:bg-gray-400 transition">
            Log In
          </button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800">AI Resume Analysis</h3>
          <p className="text-gray-600 mt-2">
            Our AI reviews and scores your resume against job descriptions.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800">Optimization Suggestions</h3>
          <p className="text-gray-600 mt-2">
            Get real-time feedback and actionable improvements.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800">Job Tracking</h3>
          <p className="text-gray-600 mt-2">
            Stay organized with a built-in job application tracker.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-gray-500 text-sm">
        © {new Date().getFullYear()} VitaeVista. All rights reserved.
      </footer>
    </main>
  );
}
