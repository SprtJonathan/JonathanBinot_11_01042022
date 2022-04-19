import logo from "../../assets/img/logo.svg";
import { Link } from "react-router-dom";
import "../../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="banner">
        <a className="website-logo-link">
          <img className="website-logo" src={logo} alt="Kasa logo"></img>
        </a>
        <nav className="menu">
          <Link className="menu--button" to="/">
            Accueil
          </Link>
          <Link className="menu--button" to="/about">
            A Propos
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
