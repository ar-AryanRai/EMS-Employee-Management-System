import React, { useState } from "react";
import "../style/Login.css";

const Login = ({ handleLogin }) => {
  //  it is used to keep track of the email and password entered by the user.
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="bg-[#1c1c1c] w-[100vw] h-[100vh] text-white flex justify-center items-center">
      <div className="container flex border-2 border-orange-400 p-4 mt-4 w-[50%] h-[50%] rounded-2xl">
        {/* left side of the login page to show the login title */}
        <div className="left h-[100%] w-[32%] border-r-2 border-orange-400 content-center text-center text-3xl underline text-orange-400">
          Log In
        </div>

        {/* right side of the login page to get information for login */}
        <div className="right">
          {/* username button div */}
          <div className="username">
            <label htmlFor="name">Username:</label>
            <input
              type="text"
              name="name"
              id="name"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your username"
              className="border-2 border-orange-400"
            />
          </div>

          {/* password button div */}
          <div className="password">
            <label htmlFor="pswd">Password:</label>
            <input
              type="password"
              name="pswd"
              id="pswd"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="border-2 border-orange-400"
            />
          </div>

          {/* login button div */}
          <div className="login-btn flex items-center justify-center w-[100%]">
            <button
              className="login bg-green-500 font-bold active:scale-90"
              onClick={() => {
                handleLogin(email, password);
              }}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
