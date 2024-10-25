import React from "react";
import { HeaderContainer, Nav, NavItem, NavList, Title } from './styles';

function Header() {
  return (
    <HeaderContainer id="header-container">
      <Title>Elidecor</Title>
      <Nav>
        <NavList>
          <NavItem>
            <a href="#about">Sobre a loja</a>
          </NavItem>
          <NavItem>
            <a href="#contact">Contato</a>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
