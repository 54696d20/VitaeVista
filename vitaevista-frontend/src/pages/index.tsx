import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="w-full max-w-6xl px-6 py-20 text-center">
        <h1 className="text-5xl font-extrabold leading-tight">
          Optimize Your Resume with AI
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          VitaeVista helps job seekers improve their resumes with AI-driven analysis and optimization.
          Get past ATS filters and land more interviews.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/signup">
            <button className="px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition">
              Get Started for Free
            </button>
          </Link>
          <Link href="/login">
            <button className="px-6 py-3 border border-gray-400 text-gray-800 text-lg font-semibold rounded-lg hover:bg-gray-200 transition">
              Log In
            </button>
          </Link>
        </div>

        {/* Optimized Image - Served from /public/images/ */}
        <div className="mt-10 flex justify-center">
          <Image
            src="/images/resume-preview.png"
            alt="AI Resume Optimization Preview"
            width={800}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Trust & Social Proof Section */}
      <section className="w-full max-w-6xl px-6 py-20 text-center bg-gray-100 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-gray-900">Trusted by Job Seekers Everywhere</h2>
        <p className="mt-3 text-lg text-gray-600">
          Our AI has helped professionals secure positions at top companies.
        </p>

        {/* Logos of Companies */}
        <div className="mt-6 flex justify-center space-x-6">
          <Image src="/images/google-logo.png" alt="Google" width={120} height={50} />
          <Image src="/images/microsoft-logo.png" alt="Microsoft" width={120} height={50} />
          <Image src="/images/amazon-logo.png" alt="Amazon" width={120} height={50} />
          <Image src="/images/linkedin-logo.png" alt="LinkedIn" width={120} height={50} />
        </div>

        {/* Testimonials */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              “VitaeVista helped me land interviews at my dream company! The AI-powered resume analysis is game-changing.”
            </p>
            <h4 className="mt-4 font-bold text-gray-800">– Sarah J.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              “I went from getting rejected to getting responses within a week! Highly recommend this tool.”
            </p>
            <h4 className="mt-4 font-bold text-gray-800">– David M.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600">
              “The AI gave me insights I never would have thought of. My resume finally gets noticed!”
            </p>
            <h4 className="mt-4 font-bold text-gray-800">– Emily R.</h4>
          </div>
        </div>
      </section>
      {/* Feature Highlights Section */}
      <section className="w-full max-w-6xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-gray-900">How VitaeVista Helps You</h2>
        <p className="mt-3 text-lg text-gray-600">
          Our AI-powered tools give you a competitive edge in your job search.
        </p>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Resume Analysis */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/images/ai-icon.png" alt="AI Analysis" className="w-16 h-16" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">AI Resume Analysis</h3>
            <p className="text-gray-600 mt-2">
              Our AI scans your resume and provides an ATS-friendly score with improvement suggestions.
            </p>
          </div>

          {/* Optimization Suggestions */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/images/improve-icon.png" alt="Resume Optimization" className="w-16 h-16" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Optimization Suggestions</h3>
            <p className="text-gray-600 mt-2">
              Get real-time AI-powered feedback on your resume's wording, formatting, and keywords.
            </p>
          </div>

          {/* Job Tracking */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <img src="/images/job-track-icon.png" alt="Job Tracking" className="w-16 h-16" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Job Tracking</h3>
            <p className="text-gray-600 mt-2">
              Keep track of your job applications, interviews, and progress—all in one place.
            </p>
          </div>
        </div>
      </section>
      {/* How It Works Section */}
      <section className="w-full max-w-6xl px-6 py-20 text-center bg-gray-100 rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
        <p className="mt-3 text-lg text-gray-600">
          Get your resume optimized in just three simple steps.
        </p>

        {/* Step-by-Step Process */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Upload Resume */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/upload-icon.png" alt="Upload Resume" className="w-16 h-16" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Upload Your Resume</h3>
            <p className="text-gray-600 mt-2">
              Simply drag and drop your resume file, and our AI will begin analyzing it instantly.
            </p>
          </div>

          {/* Step 2: AI Analysis */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/analysis-icon.png" alt="AI Analysis" className="w-16 h-16" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">AI-Powered Analysis</h3>
            <p className="text-gray-600 mt-2">
              Our AI scans for keyword optimization, formatting, and ATS compatibility.
            </p>
          </div>

          {/* Step 3: Optimize & Download */}
          <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg">
            <img src="/images/download-icon.png" alt="Download Resume" className="w-16 h-16" />
            <h3 className="text-xl font-bold text-gray-800 mt-4">Optimize & Download</h3>
            <p className="text-gray-600 mt-2">
              Receive tailored AI suggestions, make quick edits, and download your optimized resume.
            </p>
          </div>
        </div>
      </section>
      {/* Final Call-to-Action Section */}
      <section className="w-full max-w-6xl px-6 py-20 text-center bg-blue-500 text-white rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold">Ready to Land More Interviews?</h2>
        <p className="mt-3 text-lg">
          Get AI-powered insights and optimize your resume in minutes.
        </p>

        {/* CTA Button */}
        <div className="mt-6">
          <Link href="/signup">
            <button className="px-8 py-3 bg-white text-blue-500 text-lg font-semibold rounded-lg hover:bg-gray-200 transition">
              Get Started for Free
            </button>
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full max-w-6xl px-6 py-10 text-center text-gray-600 mt-10">
        <p>© {new Date().getFullYear()} VitaeVista. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </footer>
    </main>
  );
}
