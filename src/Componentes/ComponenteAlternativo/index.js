import React from "react";
import "./style.css";

export function ComponenteAlternativo() {
  return (
    <div>
      <header className="box-img-pokemon">
        <div className="box-first-background">
          <img src="/assets/imgInicial.jpg" alt="imagem inicial" />
        </div>
      </header>
      <div className="box-pokedex-text-alternativo">
        <span>???</span>
        <p>?????????</p>
      </div>
      <div className="pokedex-buttons">
        <button>????</button>
        <button>????</button>
      </div>
    </div>
  );
}

export default ComponenteAlternativo;
