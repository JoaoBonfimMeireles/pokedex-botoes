import React, { useState } from 'react';
import "./style.css";
import BoxPokemonList from '../BoxPokemonList';

export function Pokedex() {
  const [currentIndex] = useState();

  return (
    <div className="card-pokedex">
      <div className='background-pokedex'></div>
      <div className='conteudo'>
        <BoxPokemonList currentIndex={currentIndex} />
      </div>
    </div>
  );
}

export default Pokedex;
