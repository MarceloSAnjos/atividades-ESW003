import { useState } from 'react';
import Button from './components/Button/Button.jsx';
import Pacotes from './components/Pacotes/Pacotes.jsx';
import styled from 'styled-components';

const Main = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 8px;
`

function App() {
  const [dados, setData] = useState([]);

  return (
    <Main>
      <Pacotes dados={dados}/>
      <Button setData={setData}/>
    </Main>
  );
}

export default App;