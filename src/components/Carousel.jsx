import { useState } from "react";
import "../styles/Carousel.css";

function Carousel(pictures) {
  let [currentIndex, changeIndex] = useState(0);

  const array = pictures.pictures;
  const arrayLength = array.length;
  let moreThanOnePicture = array.length > 1;

  console.log(moreThanOnePicture);

  let [backgroundValue, changeBackground] = useState(array[currentIndex]);

  function changePicture(param) {
    currentIndex += param;
    if (currentIndex > arrayLength - 1) {
      currentIndex = 0;
      changeIndex(currentIndex);
    }
    if (currentIndex < 0) {
      currentIndex = arrayLength - 1;
      changeIndex(currentIndex);
    }
    changeIndex(currentIndex);
    changeBackground((backgroundValue = array[currentIndex]));

    console.log(backgroundValue);
  }

  return (
    <div
      className="carousel"
      style={{
        backgroundImage: `url(${backgroundValue})`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <div
        className={moreThanOnePicture ? "chevron-buttons" : "hide"}
        onClick={() => changePicture(-1)}
      >
        &#10092;
      </div>
      <div className="index-block">
        <p className={moreThanOnePicture ? "index" : "hide"}>{`${
          currentIndex + 1
        }/${arrayLength}`}</p>
      </div>
      <div
        className={moreThanOnePicture ? "chevron-buttons" : "hide"}
        onClick={() => changePicture(1)}
      >
        &#10093;
      </div>
    </div>
  );
}

export default Carousel;
