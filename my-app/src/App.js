import "./App.css";
import TopNavbar from "./components/TopNavbar";
import FeatureImage from "./components/FeatureImage";
import Galleries from "./components/Galleries";
import DiscordContact from "./components/DiscordContact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavbar />
        <DiscordContact />
        <FeatureImage />
        <Galleries />
      </header>
    </div>
  );
}

export default App;
