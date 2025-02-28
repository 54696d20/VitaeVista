import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiHome, FiUpload, FiClipboard } from "react-icons/fi";

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen size on mount & window resize
    const checkScreenSize = () => {
      const mobileView = window.innerWidth < 1024;
      setIsMobile(mobileView);
      if (!mobileView) {
        setIsOpen(false); // Ensure sidebar is always open on larger screens
      }
    };

    checkScreenSize(); // Run initially
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <FiHome size={20} /> },
    { name: "Upload Resume", path: "/upload", icon: <FiUpload size={20} /> },
    { name: "AI Analysis", path: "/analysis", icon: <FiClipboard size={20} /> },
  ];

  return (
    <>
      {/* Mobile Toggle Button - Moved Higher */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-2 left-4 z-50 text-gray-700 bg-white p-2 rounded-lg shadow-md flex items-center justify-center"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 bg-white shadow-md h-full w-64 p-5 transition-transform duration-300 ease-in-out flex flex-col 
          ${isOpen || !isMobile ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0 lg:w-64 lg:h-screen z-50`}
      >
        <h2 className="text-xl font-semibold text-gray-800 mb-6">VitaeVista</h2>

        <nav className="flex-1">
          <ul>
            {menuItems.map((item) => (
              <li key={item.path} className="mb-3">
                <Link
                  href={item.path}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
                    router.pathname === item.path
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-200"
                  }`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Overlay for mobile mode - ONLY appears when sidebar is open */}
      {isOpen && isMobile && (
        <div className="fixed inset-0 bg-black opacity-30 z-40" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}
