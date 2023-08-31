import React from "react";
import "./style.css";

export default function ClickTrocarPokemon({ onNextClick, onBackClick }) {
  return (
    <div className="button-trocar-pokemon">
      <button onClick={onBackClick}>Anterior</button>
      <button onClick={onNextClick}>Proximo</button>
    </div>
  );
}
