import PropTypes from "prop-types";
import React, { useContext, useState } from "react";

// Create the login context
export const LoginContext = React.createContext(localStorage.getItem("login"));

// Create the login provider component
export const LoginProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("login") === "true"
  );

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

LoginProvider.propTypes = {
  children: PropTypes.node,
};
