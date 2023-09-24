import React, { useEffect, useState } from 'react';
import slides from './SliderData';

function Notice() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [tag, setTag] = useState("");
  let placeicon = <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
  useEffect(() => {
    let newTag = ""; // Create a new variable to build the tag string
    slides.forEach((slide) => {
      newTag += (slide.title+" "+slide.date+" "+slide.time+" ");
    });
    setTag(newTag); // Update the tag state with the new value
  }, [userData]); // Include userData in the dependency array if needed

  return (
    <div>
      <marquee style={{ backgroundColor: "#fafafa",padding:"0.7em"}}>
        {tag}
      </marquee>
    </div>
  );
}

export default Notice;
