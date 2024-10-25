import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Arial', sans-serif; /* Escolha uma fonte que se adeque à estética */
    background-color: #FAEFEA;
    color: #D69F8E ;
    
    line-height: 1.6;
}
.swiper-button-next,
.swiper-button-prev {
  color: #D69F8E; /* Altere para a cor desejada */
}

/* Estilo para os pontos de paginação */
.swiper-pagination-bullet {
  background:#D69F8E; /* Cor do ponto */
}

/* Estilo para o ponto ativo */
.swiper-pagination-bullet-active {
  background: #FAEFEA; /* Cor do ponto ativo */
}

`;

export default GlobalStyles;
