import "./App.css";
import { useState } from "react";
import imagemCachorro from "./assets/cachorro.jpg";
import imagemGato from "./assets/gato.jpg";
import CardInformacoes from "./assets/Componentes/CardInformacoes";
import CardAnimal from "./assets/Componentes/CardAnimal";
import Header from "./assets/Componentes/Topo";


export default function App() {
  let imagemAnimal = "";
  let informacaoAnimal = "";
  let tipoAnimal = "";

  const [tipoDoComponenteCard, setTipoDoComponenteCard] = useState("cachorro");

  const alterarState = () => {
    if (tipoDoComponenteCard === "cachorro") {
      setTipoDoComponenteCard("gato");
    } else {
      setTipoDoComponenteCard("cachorro");
    }
  };

  if (tipoDoComponenteCard === "cachorro") {
    imagemAnimal = imagemCachorro;
    informacaoAnimal = "É um mamífero carnívoro da família dos canídeos.";
    tipoAnimal = "Cachorro";
  } else {
    imagemAnimal = imagemGato;
    informacaoAnimal = "É um mamífero carnívoro da família dos felídeos.";
    tipoAnimal = "Gato";
  }

  return (
    <div className="App">
      <Header alterarState={alterarState} />
      <CardAnimal imagemAnimal={imagemAnimal} />
      <CardInformacoes tipoAnimal={tipoAnimal} informacaoAnimal={informacaoAnimal} />
    </div>
  );
}