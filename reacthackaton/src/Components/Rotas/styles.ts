
import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 15px;
  padding: 30px 50px; /* Aumentando o espaço interno para tornar o card maior */
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px; /* Definindo uma largura fixa para os cards (ajuste conforme necessário) */
`;

export const CardTitle = styled.h2`
  color: #333;
  font-size: 20px; 
`;

export const CardContent = styled.p`
  color: #555;
  font-size: 18px; 
`;

export const CardButtonExcluir = styled.button`
  background-color: red;
  color: #fff;
  padding: 12px 24px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 15px;
  margin-left: 20px;
  margin-right: 30px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s; 
  &:hover {
    background-color: pink; 
  }
  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);
  }
`;

export const CardButton = styled.button`
  background-color: #3498db;
  color: #fff;
  padding: 12px 24px; 
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 15px;
  transition: background-color 0.3s, color 0.3s, transform 0.3s; 
  &:hover {
    background-color: #2980b9; 
  }
  &:active {
    transform: translateY(2px);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5);
  }
`;

export const ListaRotas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Textarea = styled.textarea`
  margin-top: 10px;
  width: 100%;
  border-radius: 5px;
  margin: 10px auto;
  padding: 15p 50px;
  font-size: 15px;
  text-align: justify;
`;