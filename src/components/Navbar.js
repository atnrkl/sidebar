import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  IoMdAlbums,
  IoMdCard,
  IoMdClose,
  IoMdHome,
  IoMdMenu,
  IoMdPaper,
} from "react-icons/io";

const sidebarData = [
  {
    title: "Homepage",
    path: "/",
    icon: <IoMdHome />,
    className: "nav-text",
  },
  {
    title: "Reports",
    path: "/reports",
    icon: <IoMdPaper />,
    className: "nav-text",
  },
  {
    title: "About",
    path: "/about",
    icon: <IoMdCard />,
    className: "nav-text",
  },
  {
    title: "Podcasts",
    path: "/podcasts",
    icon: <IoMdAlbums />,
    className: "nav-text",
  },
];

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const sidebarHandler = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <IoMdMenu size="2rem" onClick={sidebarHandler} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <IoMdClose size="2rem" onClick={sidebarHandler} />
            </Link>
          </li>
          {sidebarData.map((item, index) => (
            <li className={item.className} key={index}>
              <Link to={item.path}>
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
