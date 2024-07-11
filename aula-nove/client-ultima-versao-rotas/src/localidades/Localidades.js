import { useLoaderData, useNavigate } from "react-router-dom";
import "./localidades.css";
import Criteria from "../criteria/Criteria";

function Localidades() {
  const navigate = useNavigate();
  const setCriteria = (criteria) => {
    if (criteria) {
      navigate(`/localidades?q=${criteria}`)
    } else {
      navigate("/localidades");
    }
  };

  const localidades = useLoaderData();
  const selectLocalidade = (id) => {
    navigate(`/localidades/${id}`);
  }

  if (localidades?.length === 0) {
    return (
      <p>Nenhuma localidade carregada</p>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Criteria setCriteria={setCriteria} />
      <h2 style={{ marginBottom: "8px", textAlign: "center" }}>Localidades</h2>

      <div className="cardsContainer">
        {localidades?.map(localidade => {
          return (
            <div
              key={localidade.id}
              style={{ display: "flex", flexDirection: "column", padding: "24px", paddingTop: "0", backgroundColor: "plum", borderRadius: "8px", width: "320px", marginBottom: "8px", marginRight: "8px" }}
              onClick={() => selectLocalidade(localidade.id)}
            >
              <p>{localidade.descricao}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default Localidades;
