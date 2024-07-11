import { useLoaderData } from "react-router-dom";
import "./localidades.css";

export function LocalidadeDetails() {

  const localidade = useLoaderData();

  return (
    <div className="cardsContainer">
      <div
        style={{ padding: "24px", backgroundColor: "plum", borderRadius: "8px", width: "320px" }}
      >
        {localidade?.descricao}
      </div>
    </div>
  )
}