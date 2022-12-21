import React from "react";
import "./FeatureImage.css";
import { data } from "../images/images.js";

export default class FeatureImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "armorCat",
    };
  }

  currentImageDisplay = (event) => {
    //clear
    let x = document.getElementById("displayed-art");
    x.innerHTML = "";

    //set new
    let newIMG = document.createElement("img");
    newIMG.src = event.target.src;
    newIMG.className = "displayed-art";

    x.appendChild(newIMG);
  };
  render() {
    const slides = data[this.state.theme].map((i) => (
      <img
        src={i}
        alt="slides-displayed-art"
        className="slides"
        onClick={this.currentImageDisplay}
        key={i}
      ></img>
    ));

    return (
      <section className="displayed-art-container">
        <div id="displayed-art">
          <img
            src={data.armorCat[0]}
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
