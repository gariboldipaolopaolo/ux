import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-image: url("/landing.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  height: auto;
  background-position: center;
  padding-bottom: 8em;
  padding-top: 8em;
  
  > img {
    max-width: 100%;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const Title = styled.h1`
  color: #F4A51C;
  font-size: 2.5rem;
  text-transform: uppercase;
`;

export const SubTitle = styled.h1`
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
`;

export const Button = styled.button`
  width: 10em;
  height: 3em;
  background-color: #F4A51C;
  border-radius: 0.5em;
  color: white;
  border: transparent;
  
  &:hover {
    background-color: #282828;
    color: #F4A51C;
  }
`;