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
          <Link
            className={
              activeElement === "home" ? "navElement_active" : "navElement"
            }
            to="/home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              activeElement === "about" ? "navElement_active" : "navElement"
            }
            to="/about"
          >
            About
          </Link>
        </li>
        {isLoggedIn ? (
          <li>
            <button className="navElementButton" onClick={logout}>
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link
              className={
                activeElement === "login" ? "navElement_active" : "navElement"
              }
              to="/login"
            >
              Login
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
