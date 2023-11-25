import styled from 'styled-components'

export const FormContainers = styled.form`

    h2 {
        color: var(--blue);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input {
        width: 96%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
    }

    textarea {
        width: 96%;
        padding: 10px;
        border-radius: 8px;
        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;
        font-size: 1rem;

        &::placeholder {
            color: var(--text-body);
        }
        margin-top:  1rem;
    }

    button[type='submit'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: #03bb85;
        color: #fff;
        border-radius: 8px;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;

        &:hover {
            filter: brightness(0.9);
        }

    }

    button[type='button'] {
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: #933b27;
        color: #fff;
        border-radius: 8px;
        border: 0;
        font-size: 1rem;
        margin-top: 1.5rem;

        &:hover {
            filter: brightness(0.9);
        }

    }

`;


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
  width: 303px;
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

export const Textarea = styled.textarea`
  margin-top: 10px;
  width: 170px;
  border: 2px solid ;
  border-radius: 10px;
  margin: 10px auto;
  padding: 15px 100px;
  font-size: 15px;
  border-radius: 15px;
  text-align: center;
`;

export const Select = styled.select`
  width: 96%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;
  background-color: #e7e9ee;
  font-size: 1rem;
`

export const Option = styled.option`
  // width: 96%;
  // padding: 10px;
  border-radius: 8px;
  border: 1px solid #d7d7d7;

`

// export const Icon = styled(FontAwesomeIcon)`
//   position: absolute;
//   top: 242px;
//   color: black;
//   margin-left: 15px;
// `;

