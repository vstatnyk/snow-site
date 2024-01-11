// import PropTypes from "prop-types";
// import React from 'react';
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import "../index.css";
// import prop
// import PropTypes from "prop-types";

export default function Header({ activeElement }) {
  Header.propTypes = {
    activeElement: PropTypes.string,
  };

  return (
    <>
      <header>
        <ul className="navbar">
          <li>
            <Link
              className={
                activeElement === "home" ? "navElement_active" : "navelement"
              }
              to="/home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                activeElement === "about" ? "navElement_active" : "navelement"
              }
              to="/about"
            >
              About
            </Link>
          </li>
        </ul>
      </header>
      <div className="spacer"></div>
    </>
  );
}
