import { LOGO_URL } from "../utils/constant";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;
