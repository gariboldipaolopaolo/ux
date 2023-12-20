import styled from "styled-components";

type MenuProps = {
    active: boolean;
}

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4em;
  color: white;
  background-color: #282828;
`;

export const AppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  margin-left: 1em;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  height: 4em;
`;

export const Item = styled.div<MenuProps>`
    display: flex;
    height: 100%;
    align-items: center;
  
    > a {
      border-bottom: ${({active}) => active ? '1px solid #F4A51C' : '1px solid transparent'};
      color: ${({active}) => active ? '#F4A51C' : 'white'};
    }

  &:hover {
    cursor: pointer;
    > a {
      color: #F4A51C;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 1em;
  margin-right: 1em;

  > img {
    &:hover {
      cursor: pointer;
    }
  }
`;