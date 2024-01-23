import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Logout = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  function handleUserLogout() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  }

  const username = localStorage.getItem("username");

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4">Are you sure you want to log out {username}?</h1>
        <Link
          to="/"
          className="text-blue-500 hover:text-blue-800 underline mb-4 block"
        >
          Return Home
        </Link>
        <button
          onClick={handleUserLogout}
          className="w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;
