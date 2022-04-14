import logements from "../assets/data/logements.json";
import Banner from "../components/Banner";
import Tags from "../components/Lodging/Tags";
import Dropdown from "../components/Dropdown";
import "../styles/Lodging.css";

function Lodging() {
  const url = window.location.href;
  const lodgingId = url.split("?").at(-1);

  let objectProperties = logements.filter((p) => p.id === lodgingId);
  let lodging = objectProperties[0];

  console.log(lodging.description);

  return (
    <div>
      <Banner backgroundValue={`url(${lodging.pictures[0]})`} />
      <h1>{objectProperties[0].title}</h1>
      <Tags array={`${objectProperties[0].tags}`} />
      <Dropdown id={`${lodgingId}`} title="Description" description={`${lodging.description}`} />
      <Dropdown id={`${lodgingId}`} title="Équipements" description={`${lodging.equipments}`} />
    </div>
  );
}

export default Lodging;
