import { PropTypes } from "prop-types";
import { useState } from "react";
import "../index.css";

export default function PopUp({ sharedState, setSharedState }) {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [urlPlaceHolder, setUrlPlaceHolder] = useState(null);
  const [url, setUrl] = useState(null);

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = () => {
    console.log(title);
    console.log(description);
    console.log(url);
    const data = {
      title: title,
      description: description,
      url: url,
      urlPlaceHolder: urlPlaceHolder,
    };
    fetch("http://localhost:3000/new/homeElement", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // setSharedState(!sharedState);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setSharedState(!sharedState);
    refreshPage();
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    console.log(title);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    console.log(description);
  };

  const handleUrlPlaceHolderChange = (event) => {
    setUrlPlaceHolder(event.target.value);
    console.log(urlPlaceHolder);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
    console.log(url);
  };

  return (
    <>
      <div className="popUp">
        <input
          placeholder="Title"
          type="text"
          name="title"
          onChange={handleTitleChange}
        />
        <textarea
          rows="5"
          cols="30"
          name="description"
          placeholder="Enter Description here"
          onChange={handleDescriptionChange}
        ></textarea>
        <input
          placeholder="Url PlaceHolder"
          type="text"
          name="urlPlaceHolder"
          onChange={handleUrlPlaceHolderChange}
        />
        <input
          placeholder="Url"
          type="url"
          name="url"
          onChange={handleUrlChange}
        />
        <button className="submit" onClick={() => handleSubmit()}>
          {" "}
          submit{" "}
        </button>
        <button
          className="cancel"
          // style={{ backgroundColor: "red" }}
          onClick={() => setSharedState(!sharedState)}
        >
          cancel
        </button>
      </div>
    </>
  );
}

PopUp.propTypes = {
  sharedState: PropTypes.bool.isRequired,
  setSharedState: PropTypes.func.isRequired,
};
