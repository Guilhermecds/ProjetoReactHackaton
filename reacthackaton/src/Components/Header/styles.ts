
import styled from 'styled-components';

export const BotaoEsquerdo = styled.button`
  background-color: #3498db; 
  color: #fff; 
  padding: 10px 30px; 
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  position: absolute;
  top: 10px; 
  left: 70px;

  &:hover {
    background-color: #2980b9;
  }
`;

export const BotaoDireito = styled.button`
  background-color: #ff9900; 
  color: #fff; 
  padding: 10px 30px; 
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease; 
  position: absolute;
  top: 10px; 
  right: 70px;

  &:hover {
    background-color: #ff6600;
  }
`;

export const Cabecalho = styled.header`
  background: linear-gradient(to right, #ffffff, #f2f2f2); 
  padding: 20px;
  text-align: center;
`;

export const Titulo = styled.h1`
  color: #333; 
}
`;
