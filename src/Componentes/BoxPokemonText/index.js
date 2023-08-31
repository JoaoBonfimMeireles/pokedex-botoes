import "./style.css";
import React from "react";

function BoxPokemonText(props) {
  return (
    <div className="box-pokedex-text">
      <span>{props.name}</span>
      <p>{props.category} type Pokémon.</p>
      <div className="pokedex-buttons-all">
        <button>ATTACK</button>
        <button>RUN AWAY</button>
      </div>
    </div>
  );
}

export default BoxPokemonText;
