import "./Banner.css"

function Banner({ text, backgroundValue, nameOfClass }) {
  return (
    <div
      className={nameOfClass}
      style={{
        backgroundImage: `${backgroundValue}`,
      }}
    >
      <h2 className="website-banner-text">{text}</h2>
    </div>
  );
}

export default Banner;
