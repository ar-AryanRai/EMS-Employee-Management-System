import React from "react";
import "../style/Header.css";

const Header = ({ name }) => {
  
  //  function is used to log out the user
  function logOut() {
    localStorage.setItem("user", null);
    localStorage.setItem("loggedInUser", null);
    window.location.reload();
  }

  return (
    <div className="box h-[18vh] w-[100%] text-white flex justify-between items-end">
      <div className="greet">
        <h1 className="up">Hello</h1>
        <h1 className="down">{name} 👋</h1>
      </div>

      <div className="right-part">
        <button
          className="bg-red-600 outline-none cursor-pointer"
          onClick={() => {
            logOut();
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Header;
