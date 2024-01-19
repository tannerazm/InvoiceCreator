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
    <div>
      <h1>Are you sure you want to log out of:</h1>
      <h2>{username}?</h2>
      <Link to="/">
        Return Home
      </Link>
      <button onClick={handleUserLogout}>
        Logout
      </button>
    </div>
  );
};

export default Logout;