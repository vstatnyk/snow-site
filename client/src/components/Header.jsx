import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
import { useLogin } from "../contexts/loginContext.jsx";
import "../index.css";

export default function Header({ activeElement }) {
  const { isLoggedIn, setIsLoggedIn } = useLogin();

  function logout() {
    localStorage.setItem("login", false);
    setIsLoggedIn(false);
  }

  return (
    <header>
      <ul className="navbar">
        <li>
          <Link to="/home">
            <button
              className={
                activeElement === "home"
                  ? "navElement_active"
                  : "navElementButton"
              }
            >
              Home
            </button>
          </Link>
        </li>
        {/* <li>
          <Link to="/about">
            <button
              className={
                activeElement === "about"
                  ? "navElement_active"
                  : "navElementButton"
              }
            >
              About
            </button>
          </Link>
        </li> */}
        {isLoggedIn ? (
          <li className="loginNav">
            <button className="navElementButton" onClick={logout}>
              Logout
            </button>
          </li>
        ) : (
          <li className="loginNav">
            <Link to="/login">
              <button
                className={
                  activeElement === "login"
                    ? "navElement_active"
                    : "navElementButton"
                }
              >
                Login
              </button>
            </Link>
          </li>
        )}
      </ul>
      {/* <div className="spacer"></div> */}
    </header>
  );
}

Header.propTypes = {
  activeElement: PropTypes.string,
};
