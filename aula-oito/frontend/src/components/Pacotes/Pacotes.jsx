import styled from "styled-components";

const Message = styled.p``;

const TableRow = styled.tr``;
const TableCell = styled.td`
  border: 1px solid;
  text-align: center;
  vertical-align: middle;
  padding: 8px;
`;

function Pacotes(props) {
  const { dados } = props;

  const renderizaPacotes = (dados) => {
    return dados.map((pacote) => {
      let nomeHotel = pacote.items.filter((item) => !!item.nomeHotel)[0]
        .nomeHotel;

      return (
        <TableRow key={pacote.id}>
          <TableCell key={pacote.descricao}>{pacote.descricao}</TableCell>
          <TableCell key={pacote.localidade.descricao}>
            {pacote.localidade.descricao}
          </TableCell>
          <TableCell key={pacote.valor}>{pacote.valor}</TableCell>
          <TableCell key={nomeHotel}>{nomeHotel}</TableCell>
        </TableRow>
      );
    });
  };

  return <Message>{renderizaPacotes(dados)}</Message>;
}

export default Pacotes;
