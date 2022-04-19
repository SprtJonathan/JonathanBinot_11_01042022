import logements from "../assets/data/logements.json";
import Tags from "../components/Lodging/Tags";
import Carousel from "../components/Carousel";
import Collapsible from "../components/Collapsible";
import Rating from "../components/Lodging/Rating";
import "../styles/Lodging.css";

import NotFound from "./404Page";

function Lodging() {
  const url = window.location.href;
  const lodgingId = url.split("?").at(-1);

  let lodging = logements.find((p) => p.id === lodgingId);
  if (!lodging) {
    return <NotFound />;
  }

  return (
    <div className="lodging">
      <Carousel pictures={lodging.pictures} />
      <div className="lodging-header">
        <div className="title-location-tags">
          <h1 className="lodging-title">{lodging.title}</h1>
          <h3 className="lodging-location">{lodging.location}</h3>
          <Tags array={lodging.tags} />
        </div>
        <div className="host-photo-stars">
          <div className="host-name-photo">
            <h3 className="host-name">{lodging.host.name}</h3>
            <img className="host-photo" src={lodging.host.picture} alt="" />
          </div>
          <Rating score={lodging.rating} />
        </div>
      </div>
      <div className="description-equipments">
        <div className="collapsible-lodging-div">
          <Collapsible
            id={lodgingId}
            title="Description"
            description={lodging.description}
          />
        </div>
        <div className="collapsible-lodging-div">
          <Collapsible
            id={lodgingId}
            title="Équipements"
            description={lodging.equipments}
          />
        </div>
      </div>
    </div>
  );
}

export default Lodging;
