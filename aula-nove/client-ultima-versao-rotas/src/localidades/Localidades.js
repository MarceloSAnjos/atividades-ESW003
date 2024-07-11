import { useLoaderData, useNavigate } from "react-router-dom";
import "./localidades.css";
import Criteria from "../criteria/Criteria";
import styled from 'styled-components';

const CardsWrapper = styled.div`
  display: grid;
  grid-template-areas: "card card card";
  max-width: 1260px;
`;

const LocalidadeWrapper = styled.div`
  display: "flex";
  flex-direction: "column";
`;

const Subtitle = styled.h2`
  margin-bottom: "8px";
  text-align: "center";
`;

const DescricaoWrapper = styled.div`
  display: "flex";
  flex-direction: "column";
  padding: "24px";
  padding-top: "0";
  background-color: "plum";
  border-radius: "8px";
  width: "320px";
  margin-bottom: "8px";
  margin-right: "8px";
`;

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

  if (localidades?.length === 0) {
    return (
      <p>Nenhum pacote carregado</p>
    );
  }

  return (
    <LocalidadeWrapper>
      <Criteria setCriteria={setCriteria} />
      <Subtitle>Localidades</Subtitle>
      <CardsWrapper>
        {localidades?.map(localidade => {
          return (
            <DescricaoWrapper key={localidade.id}>
              <p>{localidade.descricao}</p>
            </DescricaoWrapper>
          )
        })}
      </CardsWrapper>
    </LocalidadeWrapper>
  );
}


export default Localidades;
