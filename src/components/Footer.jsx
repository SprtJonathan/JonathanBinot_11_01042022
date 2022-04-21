import logo from "../assets/img/logo.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <img className="footer-logo" src={logo}></img>
      <div>© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}
export default Footer;
