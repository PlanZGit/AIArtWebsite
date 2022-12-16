import "./App.css";
import TopNavbar from "./components/TopNavbar";
import FeatureImage from "./components/FeatureImage";
import DiscordContact from "./components/DiscordContact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNavbar />
        <DiscordContact />
        <FeatureImage />
      </header>
    </div>
  );
}

export default App;
