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
        <label>
          Title:
          <br />
          <input type="text" name="title" onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Description:
          <textarea
            rows="5"
            cols="60"
            name="description"
            placeholder="Enter Description here"
            onChange={handleDescriptionChange}
          ></textarea>
          <label>
            Url Placeholder:
            <br />
            <input
              type="text"
              name="urlPlaceHolder"
              onChange={handleUrlPlaceHolderChange}
            />
          </label>
          <label>
            Url:
            <br />
            <input type="url" name="url" onChange={handleUrlChange} />
          </label>
        </label>
        <input type="submit" value="Submit" onClick={() => handleSubmit()} />
        <button onClick={() => setSharedState(!sharedState)}>cancel</button>
      </div>
    </>
  );
}

PopUp.propTypes = {
  sharedState: PropTypes.bool.isRequired,
  setSharedState: PropTypes.func.isRequired,
};