import PropTypes from "prop-types";
// import { useState } from "react";/
import { Link } from "react-router-dom";
import "../index.css";

export default function Section(props) {
  // const key = props.key;
  function refreshPage() {
    window.location.reload(false);
  }

  const handleDelete = () => {
    // console.log(key);
    const data = {
      key: props.elementKey,
    };
    fetch("http://localhost:3000/delete/homeElement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch((error) => {
      console.error("Error:", error);
    });
    refreshPage();
  };

  return (
    <div className="Section">
      <h2>{props.title}</h2>
      <h3>{props.text}</h3>
      {!props.url ? (
        <></>
      ) : (
        <Link className="section-url" to={props.url} target="_blank">
          {console.log(props)}
          {props.urlPlaceHolder}
        </Link>
      )}
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}

Section.propTypes = {
  elementKey: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  urlPlaceHolder: PropTypes.string,
};
