import logements from "../../assets/data/logements.json";
import "./Offers.css";
import { Link } from "react-router-dom";

function LogementsList() {
  return (
    <div className="list">
      {logements.map((mappedObject) => (
        <Link
          id={`${mappedObject.id}`}
          key={`${mappedObject.title}`}
          className="thumb"
          style={{
            backgroundImage: `url(${mappedObject.cover})`,
          }}
          to={`/lodging?${mappedObject.id}`}
        >
          <h3 className="thumb--title">{mappedObject.title}</h3>
        </Link>
      ))}
    </div>
  );
}

export default LogementsList;
