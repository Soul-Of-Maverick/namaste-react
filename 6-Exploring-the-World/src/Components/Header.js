import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  return (
    <div className="header-container">
      <img className="app-logo" src={LOGO_URL}></img>
      <h1 className="app-name"> MOM's Maggic</h1>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>about</li>
          <li>contact us</li>
          <li>Cart📦</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("LogOut") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
