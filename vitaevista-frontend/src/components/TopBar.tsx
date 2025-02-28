import { FiSearch, FiUser, FiSettings, FiLogOut } from "react-icons/fi";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function TopBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between bg-white shadow-md px-6 py-3 sticky top-0 w-full z-40">
      {/* Search Bar - Hidden on mobile */}
      <div className="relative w-1/3 hidden lg:block">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-300 outline-none"
        />
        <FiSearch className="absolute left-3 top-3 text-gray-500" size={18} />
      </div>

      {/* Account Dropdown */}
      <div className="relative ml-auto" ref={dropdownRef}>
        <button
          className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <FiUser size={20} className="text-gray-700" />
          <span className="hidden md:block text-gray-700">Account</span>
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md">
            <ul className="py-2 text-gray-700">
              <li onClick={() => setIsDropdownOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FiUser className="mr-2" /> <Link href="/profile">Profile</Link>
              </li>
              <li onClick={() => setIsDropdownOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FiSettings className="mr-2" /> Settings
              </li>
              <li onClick={() => setIsDropdownOpen(false)} className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center">
                <FiLogOut className="mr-2" /> Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
