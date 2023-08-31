import React, { useState, useEffect } from "react";
import ClickTrocarPokemon from "../ClickTrocarPokemon";
import BoxPokemonImg from "../BoxPokemonImg";
import BoxPokemonText from "../BoxPokemonText";
import axios from "axios";
import ComponenteAlternativo from "../ComponenteAlternativo";

export function BoxPokemonList() {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://dev-api-teste.mandarin.com.br/pokemons"
        );
        const data = response.data;
        setPokemonList(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  const nextPokemon = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);
  };
  const backPokemon = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % pokemonList.length);
  };

  return (
    <div className="card-pokedex">
      {currentIndex >= 0 ? (
        pokemonList[currentIndex] && (
          <div key={pokemonList[currentIndex].id}>
            <BoxPokemonImg
              image_url={pokemonList[currentIndex].image_url}
              background_image_url={
                pokemonList[currentIndex].background_image_url
              }
              name={pokemonList[currentIndex].name}
            />
            <BoxPokemonText
              name={pokemonList[currentIndex].name}
              category={pokemonList[currentIndex].category}
            />
          </div>
        )
      ) : (
        <ComponenteAlternativo />
      )}
      <div className="box-buttons">
        <ClickTrocarPokemon
          onNextClick={nextPokemon}
          onBackClick={backPokemon}
        />
      </div>
    </div>
  );
}

export default BoxPokemonList;
