import React from "react";
import { Link } from "react-router-dom";

const NavbarHeader: React.FC = () => {
  return (
    <div>
      {/* Main Navbar */}
      <nav className="navbar-main">
        <p style={{ margin: 0 }} id="hamburger">&#9776;</p>
        <Link to="/" className="navbar-link left-link">Home</Link>
        <Link to="/about" className="navbar-link left-link">About</Link>
        <div className="dropdown">
          <div className="navbar-link left-link">Events</div>
          <div className="dropdown-content">
            <Link to="/events" className="navbar-link left-link">Current Events</Link>
            <Link to="/year-in-review" className="navbar-link left-link">Year in Review</Link>
          </div>
        </div>
        <div className="dropdown">
          <div className="navbar-link left-link">Officers</div>
          <div className="dropdown-content">
            <Link to="/officers/" className="navbar-link left-link">Current Officers</Link>
            <Link to="/officers/oldOfficers2022-23" className="navbar-link left-link">2022-2023</Link>
            <Link to="/officers/oldOfficers2021-22" className="navbar-link left-link">2021-2022</Link>
            <Link to="/officers/oldOfficers2019-20" className="navbar-link left-link">2019-2020</Link>
            <Link to="/officers/oldOfficers2018-19" className="navbar-link left-link">2018-2019</Link>
          </div>
        </div>
        <Link to="/sponsors" className="navbar-link left-link">Sponsors</Link>
        <Link to="/alumni" className="navbar-link left-link">Alumni</Link>

        <div></div>
        <ul className="navbar-connect">
          <li className="navbar-text">Connect</li>
          <li><a href="https://www.facebook.com/saseatvt/" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i></a></li>
          <li><a href="https://www.instagram.com/saseatvt/" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i></a></li>
          <li><a href="mailto:vtsase@gmail.com" className="navbar-link" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i></a></li>
        </ul>
      </nav>

      {/* Hidden Navbar */}
      <nav className="navbar-hidden">
        <div className="navbar-select-option"><Link to="/" className="navbar-link">Home</Link></div>   
        <div className="navbar-select-option"><Link to="/about" className="navbar-link">About</Link></div>   
        <div className="navbar-select-option"><Link to="/events" className="navbar-link">Events</Link></div>   
        <div className="navbar-select-option"><Link to="/officers" className="navbar-link">Officers</Link></div>   
        <div className="navbar-select-option"><Link to="/sponsors" className="navbar-link">Sponsors</Link></div>   
        <div className="navbar-select-option"><Link to="/year-in-review" className="navbar-link">Year in Review</Link></div>   
        <div className="navbar-select-option"><Link to="/alumni" className="navbar-link">Alumni</Link></div> 
      </nav>
    </div>
  );
};

export default NavbarHeader;

