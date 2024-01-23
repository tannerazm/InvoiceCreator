import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheck } from "react-icons/fa"; // Import FaCheck for the checkmark
import { Link, useNavigate } from "react-router-dom";
import { registerPerson } from "../api/user";

const Register = ({
  seePassword,
  setSeePassword,
  password,
  setPassword,
  username,
  setUsername,
  isLoggedIn
}) => {
  const [seeRetypePass, setSeeRetypePass] = useState(false);
  const [retypedPass, setRetypedPass] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true); // New state variable
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordsMatch(e.target.value === retypedPass);
  };

  const handleRetypedPasswordChange = (e) => {
    setRetypedPass(e.target.value);
    setPasswordsMatch(password === e.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== retypedPass) {
      setPasswordsMatch(false);
      alert("Passwords do not match. Please try again.");
      return;
    }
    try {
      const registeredPerson = await registerPerson(username, password);
      if (registeredPerson) {
        setUsername("");
        setPassword("");
        navigate("/login");
      }
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <>
      {isLoggedIn ? (
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            You're already logged in. Click{" "}
            <Link
              to="/"
              className="text-blue-500 hover:text-blue-800 underline"
            >
              here
            </Link>{" "}
            to go to the home page.
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen bg-gray-100">
          <form
            onSubmit={handleSubmit}
            className="p-6 bg-white rounded shadow-md w-96"
          >
            <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

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

            <div className="mb-4 relative">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <div className="flex items-center">
                <input
                  type={seePassword ? "text" : "password"}
                  onChange={handlePasswordChange}
                  value={password}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                    passwordsMatch ? "focus:border-green-500" : "border-red-500"
                  }`}
                />
                {password && (
                  <div className={`absolute ${passwordsMatch ? 'pt-7' : 'pt-3'} inset-y-0 right-0 flex items-center pr-3`}>
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
                )}
              </div>
              {!passwordsMatch && (
                <p className="text-red-500 text-xs italic">
                  Passwords must match.
                </p>
              )}
            </div>

            {password && (
              <div className="mb-6 relative">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Retype Password
                </label>
                <div className="flex items-center">
                  <input
                    type={seeRetypePass ? "text" : "password"}
                    onChange={handleRetypedPasswordChange}
                    value={retypedPass}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none ${
                      passwordsMatch
                        ? "focus:border-green-500"
                        : "border-red-500"
                    }`}
                  />
                  {retypedPass && (
                    <>
                      {passwordsMatch && retypedPass ? (
                        <FaCheck className="absolute inset-y-0 right-0 mr-3 text-green-500" />
                      ) : null}
                      <div className="absolute pt-7 inset-y-0 right-0 flex items-center pr-3">
                        {seeRetypePass ? (
                          <FaEyeSlash
                            className="hover:cursor-pointer"
                            onClick={() => setSeeRetypePass(!seeRetypePass)}
                          />
                        ) : (
                          <FaEye
                            className="hover:cursor-pointer"
                            onClick={() => setSeeRetypePass(!seeRetypePass)}
                          />
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>

            <div className="mt-4 text-center">
              Already registered?{" "}
              <Link
                to="/login"
                className="text-blue-500 hover:text-blue-800 underline"
              >
                Sign in
              </Link>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
