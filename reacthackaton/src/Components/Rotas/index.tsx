import axios from 'axios';
import {
  Card,
  CardTitle,
  CardContent,
  CardButton,
  ListaRotas,
  CardButtonExcluir
} from './styles';
import { FormEvent, useContext, useEffect, useState } from 'react';
import { CustomModal } from '../CustonModal';

interface PropsRotas {
  abrirModal: () => void;

}

interface RouteData {
  id: number;
  partida: string;
  chegada: string;
}


export const Rotas = (props: PropsRotas) => {

  const [data, setData] = useState<RouteData[]>([]);;

  useEffect(() => {
    listar();
  }, [])

  function deletaRota(e: FormEvent, id: any) {
    e.preventDefault();
    if (data) {
      deletar(id)
    }
  }


  const listar = () => {
    axios.get('http://localhost:3000/rotas')
      .then((res) => {
        setData(res.data)
      })
  }


  const deletar = (id: any) => {
    axios.delete('http://localhost:3000/rotas/' + id)
      .then((res) => {
        window.location.reload()
      })
  }

  return (




    <div>

      <ListaRotas>

        {data.map(data => (

          <Card key={data.id}>
            <CardTitle>{data.partida}</CardTitle>
            <CardContent>{data.chegada}</CardContent>

            <CardButton>
              Ver Detalhes
            </CardButton>

            <CardButtonExcluir onClick={(e) => deletaRota(e, data.id)}>
              Deletar
            </CardButtonExcluir>

            <CardButton
              onClick={() => {
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