import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  margin-bottom: 4em;
`;

export const TitleContainer = styled.h3`
  margin-top: 2em;
  color: #F4A51C;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-auto-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2em;
`;