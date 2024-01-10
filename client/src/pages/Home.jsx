import { useEffect, useState } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import "../index.css";

export default function Home() {
  const [homeElements, setHomeElements] = useState(null);

  useEffect(() => {
    // const response = fetch("http://localhost:3000/homeElements");
    // const elements = response.json();
    // console.log(elements);

    fetch("http://localhost:3000/homeElements").then((response) =>
      response.json().then((res) => {
        setHomeElements(res);
      })
    );
  }, []);

  function init() {
    console.log(homeElements);
    const elements = homeElements.map((element) => (
      <Section
        key={element.id}
        className="hi"
        title={element.title}
        text={element.description}
        url={element.url}
        urlPlaceholder={element.url}
      />
    ));
    return elements;
  }

  return (
    <>
      <Header activeElement="home" />
      {!homeElements ? <></> : <div>{init()}</div>}
    </>
  );
}
