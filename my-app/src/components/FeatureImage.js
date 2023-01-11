import React from "react";
import "./FeatureImage.css";
import { images } from "../images/images.js";

export default class FeatureImage extends React.Component {
  currentImageDisplay = (event) => {
    //clear
    let x = document.getElementById("displayed-art-container");
    x.innerHTML = "";

    //set new
    let newIMG = document.createElement("img");
    newIMG.src = event.target.src;
    newIMG.className = "displayed-art";

    x.appendChild(newIMG);
  };
  render() {
    const slides = images[this.props.theme].map((i) => (
      <img
        src={i}
        alt="slides-displayed-art"
        className="slides"
        onClick={this.currentImageDisplay}
        key={i}
      ></img>
    ));

    return (
      <section className="FeatureImage">
        <div className="displayed-art-container" id="displayed-art-container">
          <img
            src={images.armorCat[0]}
            alt="displayed-art"
            className="displayed-art"
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
