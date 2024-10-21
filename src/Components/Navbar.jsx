import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav">
        <ul className="nav-left-ul">
          <li className="logo">
            <img src="" alt="logo" />
          </li>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <ul className="nav-right-ul">
          <li> Search</li>
          <li>
            <button className="hire-now">Hire Now</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
