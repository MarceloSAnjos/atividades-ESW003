import { useState, useEffect } from 'react';
import { loadPacotes } from './stub.js';
import Criteria from './components/Criteria/Criteria.js';
import Pacotes from './components/Pacotes/Pacotes.jsx';


function App() {
  const [criteria, setCriteria] = useState('');
  const [dados, setData] = useState([]);

  const onCriteriaChange = () => {
    const fetchData = async () => {
      const data = await loadPacotes(criteria);
      setData(data);
    }
    fetchData();
  }

  useEffect(onCriteriaChange, [criteria])

  return (
    <>
      <Criteria setCriteria={setCriteria} />
      <Pacotes dados={dados} />
    </>
  );
}

export default App;