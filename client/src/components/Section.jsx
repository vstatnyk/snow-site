import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../contexts/loginContext.jsx";
import "../index.css";
// import PopUp from "./PopUp.jsx";

export default function Section(props) {
  const [open, setOpen] = useState(false);
  const [showDelete, setShowDelete] = useState(true);
  const [rotate, setRotate] = useState(false);

  const { isLoggedIn } = useLogin();

  function refreshPage() {
    window.location.reload(false);
  }

  const handleDelete = () => {
    // console.log(key);
    const data = {
      key: props.elementKey,
    };
    fetch(
      "http://" + import.meta.env.VITE_API_KEY + ":3000/delete/homeElement",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).catch((error) => {
      console.error("Error:", error);
    });
    refreshPage();
  };

  const handleToggle = () => {
    setOpen(!open);
    setRotate(!rotate);
  };

  return (
    <div className="section">
      <button className="accordion" onClick={handleToggle}>
        <span className="title">{props.title}</span>
        <span className={rotate ? "icon" : "iconRotate"}> ^ </span>
      </button>

      {open && (
        <span className="bottomAccordion">
          <br />
          <div>{props.text}</div>
          {!props.url ? (
            <></>
          ) : (
            <Link className="section-url" to={props.url} target="_blank">
              {props.urlPlaceHolder}
            </Link>
          )}
          {isLoggedIn && (
            <>
              {showDelete ? (
                <button
                  className="deleteButton"
                  onClick={() => setShowDelete(!showDelete)}
                >
                  delete
                </button>
              ) : (
                <div className="finalDelete">
                  <br />
                  <h2>Are you sure?</h2>
                  <div className="buttonBox">
                    <button
                      className="finalButtonCancel"
                      onClick={() => setShowDelete(!showDelete)}
                    >
                      cancel
                    </button>
                    <button onClick={handleDelete}>delete</button>
                  </div>
                </div>
              )}
            </>
          )}
        </span>
      )}
    </div>
  );
}
// }

Section.propTypes = {
  elementKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  urlPlaceHolder: PropTypes.string,
};
