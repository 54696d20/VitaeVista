import Head from "next/head";
import { useState, useEffect } from "react";
import { getUserProfile } from "../utils/api";

export default function Profile() {
  const [user, setUser] = useState<{ name: string; email: string; plan: string; renewalDate: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await getUserProfile();
        setUser(response);
      } catch (err) {
        console.error("Error fetching user profile:", err);
        setError("Failed to load user profile. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpgrade = () => {
    alert("Redirecting to payment page...");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <Head>
        <title>Profile - VitaeVista</title>
        <meta name="description" content="Manage your profile and subscription settings." />
      </Head>

      <h1 className="text-3xl font-semibold text-gray-800">My Profile</h1>
      <p className="mt-2 text-gray-600">Manage your account and subscription settings.</p>

      {/* Loading State */}
      {loading && <p className="mt-4 text-gray-600">Loading profile...</p>}

      {/* Error Message */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Profile Details */}
      {user && (
        <>
          <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-md text-center">
            <h2 className="text-xl font-semibold text-gray-800">Account Details</h2>
            <p className="mt-2 text-gray-600"><strong>Name:</strong> {user.name}</p>
            <p className="mt-1 text-gray-600"><strong>Email:</strong> {user.email}</p>
          </div>

          {/* Subscription Details */}
          <div className="mt-6 p-6 bg-white rounded-lg shadow-md w-full max-w-md text-center">
            <h2 className="text-xl font-semibold text-gray-800">Subscription</h2>
            <p className="mt-2 text-gray-600"><strong>Plan:</strong> {user.plan}</p>
            <p className="mt-1 text-gray-600"><strong>Renews On:</strong> {user.renewalDate}</p>

            <button
              onClick={handleUpgrade}
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Manage Subscription
            </button>
          </div>
        </>
      )}
    </div>
  );
}
