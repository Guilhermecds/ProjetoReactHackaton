
import styled from 'styled-components';

export const Rodape = styled.footer`
    background: linear-gradient(to right, #ffffff, #f2f2f2);
    padding: 20px;
    text-align: center;
    width: 100%;
    position: fixed;
    bottom: -60px; /* Inicialmente esconde o rodapé abaixo da tela */
    transition: bottom 0.2s ease; /* Adiciona uma transição para suavizar o efeito */
`;

export const Label = styled.label`
    color: #333;
`;