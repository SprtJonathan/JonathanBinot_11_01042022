import { Link } from "react-router-dom";
import "./404.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="error-block">
        <h1 className="error-block-h1">404</h1>
        <p className="error-block-p">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <Link className="return-home" to="/">
        Retourner sur la page d’accueil
      </Link>
    </div>
  );
}

export default PageNotFound;
