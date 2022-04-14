import "../styles/Index.css";
import "../styles/Home.css";
import Banner from "../components/Banner";
import LogementsList from "../components/Offers";

import banniere from "../assets/img/Banner.png";

function Home() {
  return (
    <div className="App">
      <Banner
        text="Chez vous, partout et ailleurs"
        backgroundValue={`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${banniere})`}
      />
      <LogementsList />
    </div>
  );
}

export default Home;
