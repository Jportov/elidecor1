import React from "react";
import { FooterContainer, FooterText } from "./styles"; // Importa os estilos

function Footer() {
  return (
    <FooterContainer>
      <div className="container">
        <FooterText>
          &copy; Elidecor - Todos os direitos reservados - 2023
        </FooterText>
      </div>
    </FooterContainer>
  );
}

export default Footer;
