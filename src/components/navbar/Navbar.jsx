import { useState } from "react";
import "./navbar.css";
import { IoMdMenu } from "react-icons/io";
import logo from "../../assets/image/logo.png";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="header">
      <div className="gameArena-logo">
        <span>
          <img src={logo} /> gameArena
        </span>
      </div>

      <div className="shelf-nav">
        <div className="shelf-sub-nav">
          <a>ABOUT</a>
        </div>
        <div className="shelf-sub-nav">
          <a>COMMUNITY</a>
        </div>
        <div className="shelf-sub-nav">
          <a>CALENDAR</a>
        </div>
        <div className="shelf-sub-nav">
          <a>GAMEPASS</a>
        </div>
      </div>

      <span className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
        <IoMdMenu />
      </span>

      {showMenu && (
        <div className="menu">
          <span>ABOUT</span>
          <span>COMMUNITY</span>
          <span>CALENDAR</span>
          <span>GAMEPASS</span>
        </div>
      )}
    </div>
  );
};

export default Navbar;
