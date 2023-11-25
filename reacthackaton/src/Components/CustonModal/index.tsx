import { FormEvent, useContext, useEffect, useRef, useState } from 'react'
import Modal from 'react-modal'
import { Button, FormContainer, FormGroup, Input, InputDate, Label } from './style';
import axios from 'axios';


interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
    // editarTarefa: (data: any) => void;
}

export function CustomModal(props: PropsModal) {

    const [partida, setPartida] = useState('')
    const [chegada, setChegada] = useState('')
    const [detalhes, setDetalhes] = useState('')

    function limparCamposEFecharModal() {
        props.fecharModal()
    }


    function enviarForm(e: any) {
        e.preventDefault();
        let objRota = {
            partida,
            chegada,
            detalhes
        }
        inserir(objRota)
    }

    const inserir = (obj: any) => {
        axios.post('http://localhost:3000/rotas', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                limparCamposEFecharModal()
                window.location.reload()
            })
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

                    <Label>Datlhes da Rota:</Label>
                    <textarea
                        placeholder="Cidade Destino"
                        value={detalhes}
                        onChange={(e) => setDetalhes(e.target.value)}
                        required
                    >
                        Detalhes
                    </textarea>

                </FormGroup>
                <FormGroup>
                    <Button type="submit">Criar Rota</Button>
                </FormGroup>
                
            </FormContainer>

        </Modal>
    )
}