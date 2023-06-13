import React, { useState } from "react";
import { Fade, Zoom, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import kids2 from "../image/kids2.jpg"
import kids3 from "../image/kids3.jpg"
import kids4 from "../image/kids4.png"
import kids5 from "../image/kids5.jpg"
import kids6 from "../image/kids6.webp"
import kids7 from "../image/kids7.jpg"


const slideImages = [
  { url: kids4 },
  { url: kids2 },
  { url: kids3 },
  { url: kids5 },
  { url: kids6 },
  { url: kids7 },
  
];

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "70vh",
  backgroundPosition: "center"

};

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="slide-container">
      <Slide
        autoplay={true}
        duration={3000}
        transitionDuration={1000}
        indicators={true}
        arrows={false}
        onChange={(oldIndex, newIndex) => setActiveIndex(newIndex)}
      >
        {slideImages.map((image, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${image.url})` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}