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
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.04 7.78312L39.92 0.703125L0.359985 40.3031L39.96 79.9031L47.04 72.8231L14.52 40.3031L47.04 7.78312Z"
            fill="white"
          />
        </svg>
      </div>
      <p className={moreThanOnePicture ? "index" : "hide"}>{`${
        currentIndex + 1
      }/${arrayLength}`}</p>
      <div
        className={moreThanOnePicture ? "chevron-buttons" : "hide"}
        onClick={() => changePicture(1)}
      >
        <svg
          width="48"
          height="80"
          viewBox="0 0 48 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}

export default Carousel;
