import { useEffect, useState } from "react";
import Header from "../components/Header";
// import { LoginContext } from "../contexts/loginContext";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../contexts/loginContext.jsx";

export default function Login() {
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const { isLoggedIn, setIsLoggedIn } = useLogin();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(isLoggedIn);
    if (localStorage.getItem("login") === "true") {
      navigate("/home");
    }
  }, []);

  const handleEmailChange = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      email: userEmail,
      password: userPassword,
    };

    try {
      const response = await fetch("http://localhost:3000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to login");
      }

      const responseData = await response.json();
      console.log("Success:", responseData);

      // Assuming successful login updates the login state
      localStorage.setItem("login", true);
      setIsLoggedIn(true); // Update state, assuming setIsLoggedIn is defined in your component or context

      // Redirect user here to the desired page after successful login
      // navigate('/path-after-login'); // Use navigate from react-router-dom if you have it
    } catch (error) {
      alert("An error occurred. Please try again.");
      console.error("Error:", error);
      localStorage.setItem("login", false);
      setIsLoggedIn(false); // Update state on error
    }
    navigate("/home");
  };

  return (
    <>
      {isLoggedIn ? (
        <></>
      ) : (
        <div>
          <Header activeElement="login" />
          <h2>Login</h2>
          <form>
            <label>
              email:
              <input type="text" onChange={handleEmailChange} />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                // value={userPassword}
                onChange={handlePasswordChange}
              />
            </label>
            <br />
            <button type="submit" onClick={handleSubmit}>
              Login
            </button>
          </form>
        </div>
      )}
    </>
  );
}
