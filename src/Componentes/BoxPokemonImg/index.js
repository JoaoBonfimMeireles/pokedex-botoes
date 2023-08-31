import React from "react";
import "./style.css";

export function BoxPokemonImg(props) {
  return (
    <header className="box-img-pokemon">
      <div className="box-first-background">
        <img src={props.background_image_url} alt={props.name} />
      </div>
      <div className="box-first-img">
        <img src={props.image_url} alt={props.name} />
      </div>
    </header>
  );
}

export default BoxPokemonImg;
