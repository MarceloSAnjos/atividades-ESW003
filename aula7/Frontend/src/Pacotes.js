
import styled from 'styled-components';

const Message = styled.p`
`;

function Pacotes(props) {
  const { dados } = props;

  const renderizaPacotes = dados => {
    return dados.map(pacote => {
      let nomeHotel = pacote.items.filter((item) => !!item.nomeHotel)[0].nomeHotel;
      return (
        <tr>
          <td>{pacote.descricao}</td>
          <td>{pacote.localidade.descricao}</td>
          <td>{pacote.valor}</td>
          <td>{nomeHotel}</td>
        </tr>
      )
    })
  }

  return (
    <Message>{renderizaPacotes(dados)}</Message>
  );
}

export default Pacotes;