import { FormEvent, useContext, useEffect, useState } from 'react'
import Modal from 'react-modal'
import { Button, FormContainer, FormGroup, Input, InputDate, Label } from './style';


interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
}





export function CustomModal(props: PropsModal) {


    function limparCamposEFecharModal() {
        props.fecharModal()
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

            <FormContainer /*onSubmit={handleSubmit} */>
            <FormGroup>
                <Label>Ponto de Partida:</Label>
                <Input
                type="text"
                placeholder="Cidade de Partida"
                
                // value={startPoint}
                // onChange={(e) => setStartPoint(e.target.value)}
                // required
                />
            </FormGroup>
            <FormGroup>
                <Label>Ponto de Destino:</Label>
                <Input
                    type="text"
                    placeholder="Cidade Destino"
                // value={endPoint}
                // onChange={(e) => setEndPoint(e.target.value)}
                // required
                />

                <div style={{ display: "flex" }}>

                    <div style={{ marginTop: "10px" }}>
                        <p>Data Retorno</p>
                        <InputDate
                            type="date"
                        // value={endPoint}
                        // onChange={(e) => setEndPoint(e.target.value)}
                        // required
                        />
                    </div>

                    <div style={{ marginTop: "10px" }}>
                        <p>Data Saida</p>
                        <InputDate
                            type="date"
                        // value={endPoint}
                        // onChange={(e) => setEndPoint(e.target.value)}
                        // required
                        />
                    </div>
                </div>
            </FormGroup>
            <FormGroup>
                <Button type="submit">Criar Rota</Button>
            </FormGroup>
        </FormContainer>

        </Modal>
    )
}
