import React from "react";
import "./FeatureImage.css";
import { images } from "../images/images.js";

export default class FeatureImage extends React.Component {
  handleDisplay = (event) => {
    let displayArt = document.getElementById("displayed-art");
    displayArt.src = event.target.src;
  };

  render() {
    const slides = images[this.props.theme].map((i) => (
      <img
        src={i}
        alt="slides-displayed-art"
        className="slides"
        onClick={this.handleDisplay}
        key={i}
      ></img>
    ));

    let x = images[this.props.theme][0];
    console.log(x);
    return (
      <section className="FeatureImage" id="FeatureImage">
        <div className="displayed-art-container" id="displayed-art-container">
          <img
            src={x}
            alt="displayed-art"
            className="displayed-art"
            id="displayed-art"
          ></img>
        </div>

        <div className="displayed-art-title">
          <h2>Midjourney</h2>
          <h6 className="displayed-art-subtitle">empowering people</h6>
        </div>

        <div className="slides-container">{slides}</div>
      </section>
    );
  }
}
