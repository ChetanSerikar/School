import { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo.svg";
import Hamburger from "../assets/Hamburger.svg";
import XMark from "../assets/x-mark.svg";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Academics",
      link: "/academics",
    },
    {
      title: "Admissions",
      link: "/admissions",
    },
    {
      title: "Student",
      link: "/studentlife",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];

  return (
    <nav className="navbar">
      <div className="nav_container border-radius-8">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src={showNavbar ? XMark : Hamburger} alt="" width={35} />
        </div>
        <div
          className={`nav-elements border-radius-1  ${showNavbar && "active"} `}
        >
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  onClick={() => setShowNavbar((prev) => !prev)}
                  to={item.link}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
