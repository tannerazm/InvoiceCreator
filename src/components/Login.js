import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginPerson } from "../api/user";
import { Link, useNavigate } from "react-router-dom";

const Login = ({
  seePassword,
  setSeePassword,
  password,
  setPassword,
  username,
  setUsername,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const loggedInUser = await loginPerson(username, password);
      if (loggedInUser) {
        setIsLoggedIn(true);
        setUsername("");
        setPassword("");
        navigate("/");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      {isLoggedIn ? (
        <div>Logged In</div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded shadow-md w-96"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="mb-6 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type={seePassword ? "text" : "password"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="absolute pt-7 inset-y-0 right-0 flex items-center px-3">
                {seePassword ? (
                  <FaEyeSlash
                    className="hover:cursor-pointer"
                    onClick={() => setSeePassword(!seePassword)}
                  />
                ) : (
                  <FaEye
                    className="hover:cursor-pointer"
                    onClick={() => setSeePassword(!seePassword)}
                  />
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>

            <div className="mt-4 text-center">
              Not registered?{" "}
              <Link
                to="/register"
                className="text-blue-500 hover:text-blue-800 underline"
              >
                Sign up
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
