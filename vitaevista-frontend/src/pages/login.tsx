export default function Login() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">
          Welcome Back
        </h1>
        <p className="mt-2 text-gray-600 text-center">
          Log in to access your AI-powered resume tools.
        </p>

        <form className="mt-6">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg mb-4 text-gray-900 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg mb-4 text-gray-900 placeholder-gray-500"
          />
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-600 text-center">
          Don&spos;t have an account?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign up here
          </a>
        </p>
      </div>
    </main>
  );
}
