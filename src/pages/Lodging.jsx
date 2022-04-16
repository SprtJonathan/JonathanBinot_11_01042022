import logements from "../assets/data/logements.json";
import Tags from "../components/Lodging/Tags";
import Collapsible from "../components/Collapsible";
import "../styles/Lodging.css";

function Lodging() {
  const url = window.location.href;
  const lodgingId = url.split("?").at(-1);

  let objectProperties = logements.filter((p) => p.id === lodgingId);
  let lodging = objectProperties[0];

  return (
    <div>
      <h1>{objectProperties[0].title}</h1>
      <Tags array={`${lodging.tags}`} />
      <Collapsible
        id={`${lodgingId}`}
        title="Description"
        description={`${lodging.description}`}
      />
      <Collapsible
        id={`${lodgingId}`}
        title="Équipements"
        description={`${lodging.equipments}`}
      />
    </div>
  );
}

export default Lodging;
