import styled from 'styled-components';

// Estilo do botão de navegação
export const CustomSwiperButton = styled.button`
  background-color: #E7B8A0; /* Cor de fundo do botão */
  border: none; /* Remove a borda padrão */
  border-radius: 5px; /* Bordas arredondadas */
  padding: 10px; /* Espaçamento interno */
  color: #FFFFFF; /* Cor do texto */
  cursor: pointer; /* Muda o cursor para indicar que é clicável */
  
  &:hover {
    background-color: #D69F8E; /* Cor do botão ao passar o mouse */
  }
`;

// Estilo do bullet de paginação
export const CustomPaginationBullet = styled.button`
  background-color: #E7B8A0; /* Cor do bullet */
  border: none; /* Remove a borda padrão */
  border-radius: 50%; /* Forma circular */
  width: 10px; /* Largura do bullet */
  height: 10px; /* Altura do bullet */
  margin: 0 5px; /* Espaçamento entre os bullets */
  
  &.swiper-pagination-bullet-active {
    background-color: #D69F8E; /* Cor do bullet ativo */
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 500px; /* Altura máxima da imagem */
  object-fit: cover; /* Ajusta a imagem para cobrir a área disponível */
`;

export const AboutSection = styled.section`
  text-align: center;
  margin: 2rem 0; /* Margem superior e inferior para espaçamento */
`;

export const AboutImage = styled.img`
  width: 100%; /* Largura completa da imagem */
  max-width: 400px; /* Largura máxima para a imagem */
  border-radius: 10px; /* Bordas arredondadas */
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between; /* Isso vai colocar os botões nas extremidades */
  position: absolute; /* Torna o contêiner absoluto em relação ao Swiper */
  width: 100%; /* Ocupa toda a largura */
  top: 50%; /* Alinha verticalmente no meio do slide */
  transform: translateY(-50%); /* Centraliza os botões verticalmente */
  z-index: 10; /* Certifique-se de que os botões ficam acima de outros elementos */
`;