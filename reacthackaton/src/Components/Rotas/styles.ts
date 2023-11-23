// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import styled from 'styled-components';

// // Criando os componentes estilizados
// export const FormContainer = styled.form`
//   max-width: 400px;
//   margin: 20px auto;
//   padding: 20px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//   background-color: #fff
// `

// RotasStyles.js
import styled from 'styled-components';

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  margin: 10px;
  padding: 20px; /* Aumentando o espaço interno para tornar o card maior */
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 300px; /* Definindo uma largura fixa para os cards (ajuste conforme necessário) */
`;

export const CardTitle = styled.h2`
  color: #333;
  font-size: 20px; /* Aumentando o tamanho da fonte do título */
`;

export const CardContent = styled.p`
  color: #555;
  font-size: 18px; /* Aumentando o tamanho da fonte do conteúdo */
`;

export const CardButton = styled.button`
background-color: #3498db;
color: #fff;
padding: 12px 24px; /* Ajustando o espaçamento interno do botão */
border: none;
border-radius: 5px;
cursor: pointer;
font-size: 18px; /* Aumentando o tamanho da fonte do botão */
margin-top: 15px; /* Aumentando a margem superior do botão */
transition: background-color 0.3s, color 0.3s, transform 0.3s; /* Adicionando uma transição suave para mudanças de cor e transformação */

&:hover {
  background-color: #2980b9; /* Mudando a cor de fundo ao passar o mouse */
}

&:active {
  transform: translateY(2px); /* Movendo o botão para baixo ao clicar */
}

&:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.5); /* Adicionando um contorno de foco */
}

  
`;

export const ListaRotas = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

// Adicione outros estilos conforme necessário