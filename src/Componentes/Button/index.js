import "./style.css";

export default function Button(props) {
  return (
    <div className="Button">
        <button onClick={props.alterarState}>Mudar Animal</button>
    </div>
  );
}