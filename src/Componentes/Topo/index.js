import Button from "../Button";
import "./style.css";

export default function Header(props) {
  return (
    <div className="button">
      <header>
        <h1>Projeto Props + useState</h1>
        <p>Clique no botão para mudar os componentes abaixo</p>
       <Button alterarState={props.alterarState} />
      </header>
    </div>
  );
}