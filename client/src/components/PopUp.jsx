import { PropTypes } from "prop-types";
import { useState } from "react";
import "../index.css";

export default function PopUp({ sharedState, setSharedState }) {
  const [data, setData] = useState({
    title: null,
    description: null,
    url: null,
    urlPlaceHolder: null,
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  function checkButton(
    title = data.title,
    description = data.description
    // url = data.url,
    // urlPlaceHolder = data.urlPlaceHolder
  ) {
    if (
      title != "" &&
      title != null &&
      description != "" &&
      description != null
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }

  function refreshPage() {
    window.location.reload(false);
  }

  const handleSubmit = () => {
    if (
      (data.urlPlaceHolder != null || data.urlPlaceHolder != "") &&
      (!data.url.includes("http://") || !data.url.includes("https://"))
    ) {
      data.url = "http://" + data.url;
    }

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
    checkButton(event.target.value, data.description);
    setData({
      ...data,
      title: event.target.value,
    });
    console.log(data);
  };

  const handleDescriptionChange = (event) => {
    checkButton(data.title, event.target.value);
    setData({
      ...data,
      description: event.target.value,
    });
  };

  const handleUrlPlaceHolderChange = (event) => {
    checkButton();
    setData({
      ...data,
      urlPlaceHolder: event.target.value,
    });
  };

  const handleUrlChange = (event) => {
    checkButton();
    setData({
      ...data,
      url: event.target.value,
    });
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
        {/* <button className="submit" onClick={() => handleSubmit()}>
          submit
        </button> */}
        {buttonDisabled ? (
          <button className="submit" disabled={true}>
            Submit
          </button>
        ) : (
          <button className="submit" onClick={() => handleSubmit()}>
            Submit
          </button>
        )}
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
