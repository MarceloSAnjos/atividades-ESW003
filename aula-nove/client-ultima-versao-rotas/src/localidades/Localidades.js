import "./localidades.css";

function Localidades() {
  const localidadesMock = [
    { id: 1, title: "Pindamonhangaba", descricao: "Uma cidade pequena." },
    {
      id: 2, title: "Barril Radioativo da ZL", descricao: "Barril foi encontrado aberto próximo a Radial Leste na capital de SP. Polícia ainda procura suspeitos. A radioatividade está comendo solta. Não tentem virar o Hulk."
    },
    { id: 3, title: "Pindamonhangaba", descricao: "Uma cidade pequena." },
    {
      id: 4, title: "Barril Radioativo da ZL", descricao: "Barril foi encontrado aberto próximo a Radial Leste na capital de SP. Polícia ainda procura suspeitos. A radioatividade está comendo solta. Não tentem virar o Hulk."
    },
    { id: 5, title: "Pindamonhangaba", descricao: "Uma cidade pequena." },
    {
      id: 6, title: "Barril Radioativo da ZL", descricao: "Barril foi encontrado aberto próximo a Radial Leste na capital de SP. Polícia ainda procura suspeitos. A radioatividade está comendo solta. Não tentem virar o Hulk."
    },
    { id: 7, title: "Pindamonhangaba", descricao: "Uma cidade pequena." },
    {
      id: 8, title: "Barril Radioativo da ZL", descricao: "Barril foi encontrado aberto próximo a Radial Leste na capital de SP. Polícia ainda procura suspeitos. A radioatividade está comendo solta. Não tentem virar o Hulk."
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 style={{ marginBottom: "8px", textAlign: "center" }}>Localidades</h2>

      <div className="cardsContainer">
        {localidadesMock.map(localidade => {
          return (
            <div key={localidade.id} style={{ display: "flex", flexDirection: "column", padding: "24px", paddingTop: "0", backgroundColor: "plum", borderRadius: "8px", width: "320px", marginBottom: "8px", marginRight: "8px" }}>
              <h3 style={{ marginBottom: "8px" }}>{localidade.title}</h3>
              <p>{localidade.descricao}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}


export default Localidades;
