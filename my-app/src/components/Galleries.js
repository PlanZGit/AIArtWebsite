import React from "react";
import "./Galleries.css";
import { images } from "../images/images.js";

export default class Galleries extends React.Component {
  //Pass key string in object images to ImagePreview component

  render() {
    const galleriesSubContainer = Object.keys(images).map((i) => (
      <ImagePreview
        key={i}
        imageArray={i}
        handleTheme={this.props.handleTheme}
      ></ImagePreview>
    ));

    return (
      <section className="Galleries" id="Galleries">
        <h1>Galleries</h1>
        <div className="galleries-container"> {galleriesSubContainer} </div>
      </section>
    );
  }
}

const ImagePreview = (props) => {
  return (
    <div className="galleries-sub-container">
      <img
        src={images[props.imageArray][0]}
        className={props.imageArray}
        alt={props.imageArray}
        onClick={props.handleTheme}
      ></img>
    </div>
  );
};
