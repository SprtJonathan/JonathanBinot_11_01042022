import logo from "../assets/img/logo.jpg";
import "../styles/Banner.css";

function Banner() {
  return (
    <div className="header">
      <div className="banner">
        <a className="website-logo-link">
          <img className="website-logo" src={logo} alt="test"></img>
        </a>
        <nav className="menu">
          <a className="menu--button" id="home">
            Accueil
          </a>
          <a className="menu--button" id="about">
            A Propos
          </a>
        </nav>
      </div>
      <div className="website-banner">
        <h2 className="website-banner-text">Chez vous, partout et ailleurs</h2>
      </div>
    </div>
  );
}

export default Banner;
