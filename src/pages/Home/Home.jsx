//import { useLocation } from "react-router-dom";
import "../index.css";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import LogementsList from "../../components/Offers/Offers";

import banniere from "../../assets/img/Banner.png";

function Home() {
  //const location = useLocation();

  //console.log(location.pathname);
  return (
    <div className="App">
      <Banner
        text="Chez vous, partout et ailleurs"
        backgroundValue={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${banniere})`}
        nameOfClass="website-banner"
      />
      <LogementsList />
    </div>
  );
}

export default Home;
