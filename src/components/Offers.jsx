import logements from "../assets/data/logements.json";
import "../styles/offers.css";

function LogementsList() {
  return (
    <div className="list">
      {logements.map((mappedObject) => (
        <div
          id={`${mappedObject.id}`}
          key={`${mappedObject.title}`}
          className="thumb"
          style={{
            backgroundImage: `url(${mappedObject.cover})`,
          }}
        >
          <h3 className="thumb--title">{mappedObject.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default LogementsList;
