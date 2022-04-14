function dropdownText({ id, title, description }) {
  return (
    <div>
      <div id={`dropdown-title-${id}`} className="dropdown-title">
        <span>{title}</span>
        <span id={`dropdown-button-${id}`}>Down</span>
      </div>
      <div id={`dropdown-description-${id}`} className="dropdown-description">
        <div>{description}</div>
      </div>
    </div>
  );
}

export default dropdownText;
