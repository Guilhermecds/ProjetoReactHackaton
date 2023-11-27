import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const LoadingStyle = styled.div`
  position: fixed;
  z-index: 2;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8); /* Fundo mais claro */
  backdrop-filter: blur(4px); /* Efeito de desfoque no fundo */
  
  &:after {
    content: " ";
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 8px solid #3498db; /* Cor azul mais atraente */
    border-color: #3498db transparent #3498db transparent;
    animation: ${rotate} 1.2s linear infinite;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* Sutil sombra */
  }
`;
