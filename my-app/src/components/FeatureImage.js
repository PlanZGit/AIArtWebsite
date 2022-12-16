import React from "react";
import "./FeatureImage.css";
import displayImage from "../images/Originalv2.png";
import displayImage1 from "../images/v2UVS1.png";
import displayImage2 from "../images/v2UVS2.png";
import displayImage3 from "../images/v2UVS3.png";

export default function FeatureImage() {
  return (
    <section className="displayed-art-container">
      <img
        src={displayImage}
        alt="displayed-art"
        className="displayed-art"
      ></img>
      <div className="displayed-art-title">
        <h2>Midjourney</h2>
        <h6 className="displayed-art-subtitle">empowering people</h6>
      </div>

      <div className="slides-container">
        <img src={displayImage1} alt="displayed-art" className="slides"></img>
        <img
          src={displayImage2}
          alt="displayed-art"
          className="slides-center"
        ></img>
        <img src={displayImage3} alt="displayed-art" className="slides"></img>
      </div>
    </section>
  );
}
