import styled from 'styled-components';

// Estilize os componentes conforme necessário

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
  background-color: #f2f2f2;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const EditButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
  margin-right: 5px;
`;

export const DeleteButton = styled.button`
  background-color: #f44336;
  color: white;
  padding: 8px;
  border: none;
  cursor: pointer;
`;
