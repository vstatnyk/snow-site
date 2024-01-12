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
          {isLoggedIn ? (
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          ) : (
            <li>
              <Link
                className={
                  activeElement === "login" ? "navElement_active" : "navelement"
                }
                to="/login"
              >
                Login
              </Link>
            </li>
          )}
        </ul>
      </header>
      <div className="spacer"></div>
    </>
  );
}

Header.propTypes = {
  activeElement: PropTypes.string,
};
