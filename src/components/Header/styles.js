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

  @media (max-width: 768px) {
    flex-direction: column; /* Altera a direção para coluna em telas menores */
    padding: 10px; /* Reduz o padding */
    align-items: center; /* Alinha os itens ao início */
  }
`;

export const Title = styled.h1`
  font-family: 'Playfair Display', serif;
  font-size: 2.5rem;
  color: #D69F8E; /* Cor do título */

  @media (max-width: 768px) {
    font-size: 2rem; /* Reduz o tamanho da fonte em telas menores */
    text-align: center; /* Centraliza o título em telas menores */
  }
`;

export const Nav = styled.nav`
  ul {
    list-style: none;  /* Remove os marcadores da lista */
    padding: 0;
    margin: 0;
    display: flex;
    gap: 20px;  /* Espaçamento entre os itens do menu */

    @media (max-width: 768px) {
      flex-direction: column; /* Muda a direção da lista para coluna em telas menores */
      gap: 5px; /* Reduz o espaço entre os itens */
      
    }
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px;  /* Espaçamento entre os itens do menu */

  @media (max-width: 768px) {
    flex-direction: column; /* Muda a direção da lista para coluna em telas menores */
    gap: 10px; /* Reduz o espaço entre os itens */
    font-size:12px;
  }
`;

export const NavItem = styled.li`
  a {
    font-family: 'Raleway', sans-serif;
    color: #D69F8E;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
    text-decoration: none;

    &:hover {
      color: #E7B8A0;
    }
  }

  @media (max-width: 768px) {
    text-align: center; /* Centraliza os itens do menu em telas menores */
  }
`;
