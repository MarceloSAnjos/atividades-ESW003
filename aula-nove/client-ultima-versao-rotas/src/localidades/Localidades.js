function Localidades() {
  const localidadesMock = [
    { id: 1, descricao: "pindamonhangaba" },
    { id: 2, descricao: "barril radioativo na ZL" }
  ];

  return localidadesMock.map(localidade => {
    return (
      <li key={localidade.id}>{localidade.descricao}</li>
    )
  })
}


export default Localidades;