import logo from "../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="banner">
        <a className="website-logo-link">
          <img className="website-logo" src={logo} alt="Kasa logo"></img>
        </a>
        <nav className="menu">
          <NavLink
            exact={true}
            className="menu--button"
            to="/"
            activeClassName="active"
          >
            Accueil
          </NavLink>
          <NavLink
            className="menu--button"
            to="/about"
            activeClassName="active"
          >
            A Propos
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
