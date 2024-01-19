import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { registerPerson } from "../api/user";

const Register = ({
  seePassword,
  setSeePassword,
  password,
  setPassword,
  username,
  setUsername,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  const [seeRetypePass, setSeeRetypePass] = useState(false);
  const [retypedPass, setRetypedPass] = useState("");
  const navigate = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    if (password !== retypedPass) {
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
        <div>
          You're already logged in. Click <Link to="/">here</Link> to go to the
          home page.
        </div>
      ) : (
        <>
          <div>
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
              <label className="block relative w-full">
                <span>Retype Password</span>
                <div className="flex flex-row text-center">
                  <input
                    type={seeRetypePass ? "text" : "password"}
                    onChange={(e) => setRetypedPass(e.target.value)}
                    value={retypedPass}
                    className="w-full pr-12"
                  />
                  {seeRetypePass ? (
                    <FaEyeSlash
                      className="text-center hover:cursor-pointer"
                      onClick={() => setSeeRetypePass(!seeRetypePass)}
                    />
                  ) : (
                    <FaEye
                      className="text-center hover:cursor-pointer"
                      onClick={() => setSeeRetypePass(!seeRetypePass)}
                    />
                  )}
                </div>
              </label>
              <button type="submit">Register</button>
            </form>
          </div>
          <div>
            Already registered? Click{" "}
            <Link to="/login" className="underline">
              here
            </Link>
            .
          </div>
        </>
      )}
    </>
  );
};

export default Register;
