import React from "react";
import "./Galleries.css";
import { images } from "../images/images.js";

export default class Galleries extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Pass key string in object images to ImagePreview component
    const galleriesSubContainer = Object.keys(images).map((i) => (
      <ImagePreview key={i} imageArray={i}></ImagePreview>
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
  //props.imageArray Typeof is string
  //return preview of first image

  //CREATE onclick, pass to FeatureImage

  return (
    <div className="galleries-sub-container">
      <img src={images[props.imageArray][0]} className={props.imageArray}></img>
      ;
    </div>
  );
};
