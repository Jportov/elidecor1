// styles.js

import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px; 
  width: 100%;
  background-color: #f8f9fa;
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
  width: 80%; /* Ajuste a largura como necessário */
  height: 500px; /* Corrigido para 500px */
  max-height: 500px; /* Altura máxima da imagem */
  object-fit: cover; /* Ajusta a imagem para cobrir a área disponível */
`;
