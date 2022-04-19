import React, { useState } from "react";

function Collapsible({ id, title, description }) {
  const [isOpen, setIsOpen] = useState(false);
  //console.log(description);

  let displayDescription;

  createDescription(description);

  function createDescription(element) {
    if (typeof element === "string") {
      return (displayDescription = <div>{description}</div>);
    } else {
      return (displayDescription = (
        <div>
          {element.map((elt) => (
            <div className="collapse__list" key={elt}>
              {elt}
            </div>
          ))}
        </div>
      ));
    }
  }

  return (
    <div className="collapsible-block">
      <div
        id={`collapsible-title-${id}`}
        className="collapsible-title"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span
          id={`collapsible-button-${id}`}
          className={isOpen ? "collapsible-icon-down" : "collapsible-icon-up"}
        >
          <svg
            width="28"
            height="17"
            viewBox="0 0 28 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.15993 0.653344L0.799927 3.02668L13.9999 16.2133L27.1999 3.01335L24.8399 0.653344L13.9999 11.4933L3.15993 0.653344V0.653344Z"
              fill="white"
            />
          </svg>
        </span>
      </div>
      <div
        id={`collapsible-description-${id}`}
        className={isOpen ? "collapsible-description" : "hide"}
      >
        <div>{displayDescription}</div>
      </div>
    </div>
  );
}

export default Collapsible;
