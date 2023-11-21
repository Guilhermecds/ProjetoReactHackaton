import React, { useState } from "react";
import { FormContainer, FormGroup, Label, Input, Button, Icon } from './styles';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faUser } from '@fortawesome/free-solid-svg-icons';
// interface PropsHeader {
//     // abrirModal: () => void;
// }

// Estados para armazenar os valores dos inputs
// const [startPoint, setStartPoint] = useState('');
// const [endPoint, setEndPoint] = useState('');

// Função para lidar com o envio do formulário
// const handleSubmit = (e) => {
//     e.preventDefault();
//     // Lógica para criar uma rota com startPoint e endPoint
//     console.log('Criar rota:', startPoint, endPoint);
// };


export const Rotas = () => {
    return (
        <FormContainer /*onSubmit={handleSubmit} */>
            <FormGroup>
                <Label>Ponto de Partida:</Label>
                <Input
                    type="text"
                /*value={startPoint}
                onChange={(e) => setStartPoint(e.target.value)}
                required */
                />
            </FormGroup>
            <FormGroup>
                <Label>Ponto de Destino:</Label>
                <Icon icon={faMapMarker} />
                <Input
                    type="text"
                // value={endPoint}
                // onChange={(e) => setEndPoint(e.target.value)}
                // required
                />
            </FormGroup>
            <FormGroup>
                <Button type="submit">Criar Rota</Button>
            </FormGroup>
        </FormContainer>

    )
}
