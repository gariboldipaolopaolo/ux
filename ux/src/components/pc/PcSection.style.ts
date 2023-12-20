import styled from "styled-components";

export const Container = styled.div`
  padding: 2em 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #282828;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-left: 1px solid #F4A51C;
  padding-left: 1em;
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: #F4A51C;
  text-transform: uppercase;
`;

export const Description = styled.span`
  color: white;
`;