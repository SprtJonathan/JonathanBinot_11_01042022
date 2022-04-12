function Banner({ text, backgroundValue }) {
  return (
    <div
      className="website-banner"
      style={{ background: `${backgroundValue}` }}
    >
      <h2 className="website-banner-text">{text}</h2>
    </div>
  );
}

export default Banner;
