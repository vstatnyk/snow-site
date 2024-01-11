import { useEffect, useState } from "react";
import Header from "../components/Header";
import PopUp from "../components/PopUp";
import Section from "../components/Section";
import "../index.css";

export default function Home() {
  const [homeElements, setHomeElements] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/homeElements").then((response) =>
      response.json().then((res) => {
        setHomeElements(res);
      })
    );
  }, []);

  function init() {
    const elements = homeElements.map((element) => {
      console.log(element);
      return (
        <Section
          key={element.key}
          elementKey={element.key}
          className="hi"
          title={element.title}
          text={element.description}
          url={element.url}
          urlPlaceHolder={element.urlPlaceHolder}
        />
      );
    });
    return elements;
  }

  let togglePopUp = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <Header activeElement="home" />
      {!homeElements ? <>no elements found</> : <div>{init()}</div>}
      {showPopup ? (
        <PopUp sharedState={showPopup} setSharedState={setShowPopup} />
      ) : (
        <button onClick={togglePopUp}> click me</button>
      )}
    </>
  );
}
