import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between h-16 shadow-md items-center px-10">
      <div>Brand</div>
      <ul className="flex gap-5">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about-us">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Profile</Link>
        </li>
      </ul>
      <div className="flex gap-5 items-center">
        <div className="w-10 h-10 rounded-full bg-black"></div>
        <div>John Doe</div>
      </div>
    </nav>
  );
}

export default Navbar;
