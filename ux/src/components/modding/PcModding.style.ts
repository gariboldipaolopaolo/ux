import styled from "styled-components";

export const Container = styled.div`
  padding: 2em 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  border-right: 1px solid #F4A51C;
  padding-left: 1em;
  margin-right: 2em;
`;

export const Title = styled.h3`
  font-size: 2rem;
  color: black;
  text-transform: uppercase;
`;

export const Description = styled.span`
  color: #282828;
`;