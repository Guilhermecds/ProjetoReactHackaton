/*import React, { useState } from "react";
import { FormContainer, FormGroup, Label, Input, Button, Icon, InputDate } from './styles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faUser } from '@fortawesome/free-solid-svg-icons';
import  './estilo.css'


interface PropsRotas {
    abrirModal: () => void;
}


export const Rotas = (props: PropsRotas) => {
    return (
        <h1>aqui vai listar</h1>

    )
}*/


import {
  Card,
  CardTitle,
  CardContent,
  CardButton,
  ListaRotas
} from './styles';

interface PropsRotas {
  abrirModal: () => void;
}

export const Rotas = (props: PropsRotas) => {
  // Exemplo de dados de rotas
  const rotas = [
    { id: 1, nome: 'Douradina para Umuarama', descricao: 'Rota de Douradina até Umuarama. Desfrute de uma viagem cênica, passando por paisagens encantadoras.' },
    { id: 2, nome: 'São paulo para Argentina', descricao: 'Rota de São Paulo até Jaco. Desfrute de uma viagem cênica, passando por paisagens encantadoras.' },
    { id: 2, nome: 'São paulo para Argentina', descricao: 'Rota de São Paulo até Jaco. Desfrute de uma viagem cênica, passando por paisagens encantadoras.' },
    { id: 2, nome: 'São paulo para Argentina', descricao: 'Rota de São Paulo até Jaco. Desfrute de uma viagem cênica, passando por paisagens encantadoras.' },
    // Adicione mais rotas conforme necessário
  ];

  return (
    <div>
      
      <ListaRotas>
        {rotas.map(rota => (
          <Card key={rota.id}>
            <CardTitle>{rota.nome}</CardTitle>
            <CardContent>{rota.descricao}</CardContent>
            <CardButton onClick={props.abrirModal}>
              Ver Detalhes
            </CardButton>
          </Card>
        ))}
      </ListaRotas>
    </div>
  );
};

export default Rotas;