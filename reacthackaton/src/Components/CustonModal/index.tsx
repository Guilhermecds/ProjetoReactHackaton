import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import { Button, FormContainer, FormGroup, Input, InputDate, Label, Option, Select, Textarea } from './style';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { RotasContext } from '../contexts/rotaContext';

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
    // editarRota: (data: any) => void;
}

export function CustomModal(props: PropsModal) {
    
    const [partida, setPartida] = useState('')
    const [chegada, setChegada] = useState('')
    const [detalhes, setDetalhes] = useState('')
    const [diapartida, setDiapartida] = useState('')
    const { inserir, atualizar, funEditarRotas, funEditarRotasDefault, editarRota } = useContext(RotasContext)



    useEffect(() => {
        if (editarRota.editar) {

            setPartida(editarRota.rotas?.partida ? editarRota.rotas.partida : '')
            setChegada(editarRota.rotas?.chegada ? editarRota.rotas.chegada : '')
            setDetalhes(editarRota.rotas?.detalhes ? editarRota.rotas.detalhes : '')
            setDiapartida(editarRota.rotas?.diapartida ? editarRota.rotas.diapartida : '')
        }

    }, [editarRota.editar])


    function limparCamposEFecharModal() {
        setPartida('')
        setChegada('')
        setDetalhes('')
        setDiapartida('')
        funEditarRotasDefault();
        props.fecharModal()
    }


    function enviarForm(e: any) {
        e.preventDefault();
      
        
        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(partida) || !/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(chegada)) {
            toast.warning('Os campos de partida e destino não podem conter números ou caracteres especiais.');
            return;
        }
      
        if (editarRota.editar && editarRota.rotas) {
          let objRota = {
            ...editarRota.rotas,
            partida,
            chegada,
            detalhes,
            diapartida
          };
          atualizar(objRota);
          limparCamposEFecharModal();
        } else {
          let objRota = {
            partida,
            chegada,
            detalhes,
            diapartida
          };
          inserir(objRota);
          limparCamposEFecharModal();
        }
      }
  
    return (
        <Modal
            isOpen={props.modalVisible}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
            onRequestClose={limparCamposEFecharModal}
        >
            <button
                type='button'
                className='react-modal-close'
                onClick={limparCamposEFecharModal}
            >
                X
            </button>

            <h2
                style={{ textAlign: 'center' }}
            >Cadastrar de Rotas</h2>

            <FormContainer
                onSubmit={(e) => enviarForm(e)}
            >
                <FormGroup>
                    <Label>Ponto de Partida:</Label>
                    <Input
                        type="text"
                        placeholder="Cidade de Partida"
                        value={partida}
                        onChange={(e) => setPartida(e.target.value)}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Ponto de Destino:</Label>
                    <Input
                        type="text"
                        placeholder="Cidade Destino"
                        value={chegada}
                        onChange={(e) => setChegada(e.target.value)}
                        required
                    />
                    <FormGroup>
                        <Label>Dia de partida</Label>
                        <Select
                            value={diapartida}
                            onChange={(e) => setDiapartida(e.target.value)}
                            
                        >
                            <Option value=''></Option>
                            <Option value='Segunda - Feira'>Segunda - Feira</Option>
                            <Option value='Terça - Feira'>Terça - Feira</Option>
                            <Option value='Quarta - Feira'>Quarta - Feira</Option>
                            <Option value='Quinta - Feira'>Quinta - Feira</Option>
                            <Option value='Sexta - Feira'>Sexta - Feira</Option>
                            <Option value='Sabado - Feira'>Sabado - Feira</Option>
                            <Option value='Domingo - Feira'>Domingo - Feira</Option>
                        </Select>
                    </FormGroup>

                    <Label>Datlhes da Rota:</Label>
                    <Textarea
                        placeholder="Detalhes das rotas"
                        value={detalhes}
                        onChange={(e) => setDetalhes(e.target.value)}
                        required
                    >
                    </Textarea>


                </FormGroup>
                <FormGroup>
                    <Button type="submit">Criar Rota</Button>
                    
                </FormGroup>

            </FormContainer>

        </Modal>
    )
}