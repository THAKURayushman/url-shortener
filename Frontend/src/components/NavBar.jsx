import React from "react";
import { Link } from "@tanstack/react-router";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slice/authSlice.js";

const Navbar = () => {
  const dispatch = useDispatch();

  // Get user info from redux store
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("Navbar Auth State:", { user, isAuthenticated });

  const onLogout = () => {
    console.log("Before Logout:", localStorage.getItem("user"));
    dispatch(logout());
    localStorage.removeItem("user");
    console.log("After Logout:", localStorage.getItem("user"));
  };

  return (
    <nav className="bg-white border border-b-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left side - App Name */}
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              URL Shortener
            </Link>
          </div>

          {/* Right side - Auth buttons */}
          <div className="flex items-center">
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-gray-700">
                  Welcome, {user.user.name || user.user.email}
                </span>
                <button
                  onClick={onLogout}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
