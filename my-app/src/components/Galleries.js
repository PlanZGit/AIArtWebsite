import React from "react";
import "./Galleries.css";
// import { data } from "../images/images.js";

export default class Galleries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "armorCat",
    };
  }

  render() {
    return (
      <section className="Galleries">
        <h1>Galleries</h1>
      </section>
    );
  }
}
