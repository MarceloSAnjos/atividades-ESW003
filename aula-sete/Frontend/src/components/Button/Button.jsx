
import styled from 'styled-components';
import { loadPacotes } from '../../stub';

const InnerButton = styled.button`
    padding: 8px;
`;

function Button(props) {
  const { setData } = props;
  const onClick = async () => {
    const data = await loadPacotes();
    setData(data)
  }

  return (
      <InnerButton onClick={onClick}>Carregar</InnerButton>
  );
}

export default Button;