import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

// Criando os componentes estilizados
export const FormContainer = styled.form`
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
  text-align:center;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 20px;
  font-weight: bold
`;

export const Input = styled.input`
  width: 95%;
  padding: 8px;
  // margin-left: 5px;
  font-size: 14px;
  border: 2px solid ;
  border-radius: 10px;
`;


export const InputDate = styled.input`
  margin-top: 10px;
  width: 170px;
  padding: 8px;
  margin-left: 5px;
  font-size: 14px;
  border: 2px solid ;
  border-radius: 10px;
`;


export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  margin: 10px auto;
  padding: 15px 100px;
  font-size: 16px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 242px;
  color: black;
  margin-left: 15px;
`;