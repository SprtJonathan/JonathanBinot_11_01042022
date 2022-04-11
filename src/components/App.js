import "../styles/App.css";
import Banner from "./Banner";
import LogementsList from "./Logements";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
      </header>
      <LogementsList />
    </div>
  );
}

export default App;
