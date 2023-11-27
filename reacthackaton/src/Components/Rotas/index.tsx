import axios from 'axios';
import {
  Card,
  CardTitle,
  CardContent,
  CardButton,
  ListaRotas,
  CardButtonExcluir,
  Textarea
} from './styles';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { CustomModal } from '../CustonModal';
import { RotasContext } from '../contexts/rotaContext';
import { toast } from 'react-toastify';
import { Label } from '../CustonModal/style';

interface PropsRotas {
  abrirModal: () => void;

}

interface RouteData {
  id: any;
  partida: any;
  chegada: any;
}


export const Rotas = (props: PropsRotas) => {

  const { rotas, deletar, funEditarRotas } = useContext(RotasContext)

  function deletaRota(e: FormEvent, id: any) {
    e.preventDefault();
    if (id) {
      deletar(id)
    }
  }




  return (

    <div>

      <ListaRotas>

        {rotas.map((rotas: any) => (

          <Card key={rotas.id}>
            <CardContent><b>Cidade de Partida: </b>{rotas.partida}</CardContent>
            <br />
            <CardContent><b>Cidade de Destino: </b>{rotas.chegada}</CardContent>
            <br />
            <CardContent><b>Dia de Partida: </b> {rotas.diapartida}</CardContent>
           
            <br />
            <CardContent>
              <b>Detalhes  </b>
              <br />
              <i>{rotas.detalhes}</i>
            </CardContent>

            <CardButtonExcluir onClick={(e) => deletaRota(e, rotas.id)}>
              Deletar
            </CardButtonExcluir>

            <CardButton
              onClick={() => {
                funEditarRotas({ editar: true, rotas: rotas })
                props.abrirModal();
              }}
            >
              Editar
            </CardButton>

          </Card>
        ))}
      </ListaRotas>
    </div>
  );
};

export default Rotas;