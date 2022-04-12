import "../styles/Home.css";
import Banner from "../components/Header/Banner";
import LogementsList from "../components/Offers";

function Home() {
  return (
    <div className="App">
      <Banner
        text="Chez vous, partout et ailleurs"
        backgroundValue="linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(/../assets/img/Banner.png)"
      />
      <LogementsList />
    </div>
  );
}

export default Home;
