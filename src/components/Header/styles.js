import styled from 'styled-components';

export const HeaderContainer = styled.header`
  
  display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    background-color: #F2D8CA;
    color: #D69F8E;
    flex-direction: row;
    flex-wrap: nowrap;

`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  color: #FAEFEA;
  font-size: 2.5rem;
  color: #D69F8E;  /* Cor do título */
`;

export const Nav = styled.nav`
  ul {
    list-style: none;  /* Remove os marcadores da lista */
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;  /* Espaçamento entre os itens do menu */
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;  /* Espaçamento entre os itens do menu */
`;

export const NavItem = styled.li`
  a {
    font-family: 'Raleway', sans-serif;
    color: #D69F8E;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
    text-decoration:none;
    &:hover {
      color: #E7B8A0;
    }
  }
`;