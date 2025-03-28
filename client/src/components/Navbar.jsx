import React from "react";
import { Link } from "react-router-dom";
import '../CSS/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-brand">Book Store</span>
      </div>

      <div className="navbar-right">
        <Link to="/books" className="navbar-link">
          Books
        </Link>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
