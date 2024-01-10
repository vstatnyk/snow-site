import PropTypes from "prop-types";
// import { useState } from "react";/
import { Link } from "react-router-dom";
import "../index.css";

export default function Section(props) {
  return (
    <div className="Section">
      <h2>{props.title}</h2>
      <h3>{props.text}</h3>
      {!props.url ? (
        <></>
      ) : (
        <Link className="section-url" to={props.url}>
          {console.log(props.url)}
          {props.urlPlaceholder}
        </Link>
      )}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string,
  urlPlaceholder: PropTypes.string,
};
