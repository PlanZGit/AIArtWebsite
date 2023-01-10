import "./App.css";
import React from "react";
import TopNavbar from "./components/TopNavbar";
import FeatureImage from "./components/FeatureImage";
import Galleries from "./components/Galleries";
import DiscordContact from "./components/DiscordContact";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "armorCat",
    };
    this.handleFeatureImage = this.handleFeatureImage.bind(this);
  }
  handleFeatureImage(event) {
    this.setState({
      theme: event.target.className,
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TopNavbar />
          <DiscordContact />
          <FeatureImage theme={this.state.theme} />
          <Galleries handleFeatureImage={this.handleFeatureImage} />
        </header>
      </div>
    );
  }
}
