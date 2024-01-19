import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { loginPerson } from "../api/user";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ seePassword, setSeePassword, password, setPassword, username, setUsername, isLoggedIn, setIsLoggedIn }) => {
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
        <div className="flex flex-col justify-between">
          <form onSubmit={handleSubmit}>
            <label className="block">
              <span>Username</span>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="w-full"
              />
            </label>
            <label className="block relative w-full">
              <span>Password</span>
              <div className="flex flex-row text-center">
                <input
                  type={seePassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="w-full pr-12"
                />
                {seePassword ? (
                  <FaEyeSlash
                    className="text-center hover:cursor-pointer"
                    onClick={() => setSeePassword(!seePassword)}
                  />
                ) : (
                  <FaEye
                    className="text-center hover:cursor-pointer"
                    onClick={() => setSeePassword(!seePassword)}
                  />
                )}
              </div>
            </label>
            <button type="submit">Login</button>
            <div>
              Not registered? Click{" "}
              <Link to="/register" className="underline">
                here
              </Link>
              .
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
