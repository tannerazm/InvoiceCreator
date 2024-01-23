import React, { useEffect, useState } from "react";
import {
  Header,
  Home,
  CreateInvoice,
  About,
  Login,
  Logout,
  Register,
  Footer,
} from "./";
import { Route, Routes } from "react-router-dom";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [seePassword, setSeePassword] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('token')) {
      setIsLoggedIn(true);
    }
  },[])
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/create_invoice"
          element={<CreateInvoice isLoggedIn={isLoggedIn} />}
        ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/register"
          element={
            <Register
              seePassword={seePassword}
              setSeePassword={setSeePassword}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={
            <Login
              seePassword={seePassword}
              setSeePassword={setSeePassword}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
        <Route
          path="/logout"
          element={
            <Logout
              seePassword={seePassword}
              setSeePassword={setSeePassword}
              username={username}
              setUsername={setUsername}
              password={password}
              setPassword={setPassword}
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        ></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
