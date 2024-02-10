import { useEffect, useState } from "react";
import Header from "../components/Header";
import PopUp from "../components/PopUp";
import Section from "../components/Section";
import { useLogin } from "../contexts/loginContext.jsx";
import "../index.css";

export default function Home() {
  const [homeElements, setHomeElements] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const { isLoggedIn } = useLogin();

  useEffect(() => {
    fetch("http://" + import.meta.env.VITE_API_KEY + ":3000/homeElements").then(
      (response) =>
        response.json().then((res) => {
          setHomeElements(res);
        })
    );
    // console.log(import.meta.env.API_KEY);
  }, []);

  function init() {
    const elements = homeElements.map((element) => {
      if (element.urlPlaceHolder == null || element.urlPlaceHolder == "") {
        element.urlPlaceHolder = "Associated Link";
      }
      console.log(element);

      return (
        <Section
          key={element.key}
          elementKey={element.key}
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
      {showPopup && (
        <>
          <div className="spacer"></div>
          <h1>Add New Event</h1>
          <PopUp sharedState={showPopup} setSharedState={setShowPopup} />
        </>
      )}
      {!showPopup && (
        <>
          <Header activeElement="home" />
          <div className="spacer"></div>
          <h1>Upcoming Events</h1>
          <div className="home">
            {!homeElements ? <>no elements found</> : <div>{init()}</div>}
            {isLoggedIn && (
              <button onClick={togglePopUp} className="addButton">
                add event +
              </button>
            )}
          </div>
          <div className="spacer"></div>
          <h1>Our Social Media</h1>
          <div className="socials">
            <a
              href="https://discord.gg/gxZVca9uZU"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/blackDisc.png" alt="" className="discord" />
            </a>
            <a
              href="https://www.tiktok.com/@sacsnowclub"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/blackTikTok.png" alt="" className="tiktok" />
            </a>
            <a
              href="https://www.instagram.com/sacsnowclub/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/blackIG.png" alt="" className="instagram" />
            </a>
          </div>
        </>
      )}
    </>
  );
}
