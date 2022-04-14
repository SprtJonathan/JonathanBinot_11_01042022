function Banner({ text, backgroundValue }) {
  return (
    <div
      className="website-banner"
      style={{
        background: `${backgroundValue}`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        backgroundSize: `cover`,
      }}
    >
      <h2 className="website-banner-text">{text}</h2>
    </div>
  );
}

export default Banner;
