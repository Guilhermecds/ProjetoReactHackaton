import Modal from 'react-modal'
import { FormGroup, Button, FormContainer, Textarea, Input, Label } from './style';
import { useContext, useState, useEffect } from 'react';
import { UsuarioContext } from '../contexts/usuarioContext';

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
    // editarRota: (data: any) => void;
}

export function ModalUsuario(props: PropsModal) {

    const [nome, setNome] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const { inserirUsu, atualizar, funEditarUsuario, funEditarUsuarioDefault, editarUsuario } = useContext(UsuarioContext)

    function limparCamposEFecharModal() {
        props.fecharModal()
    }

    function enviarForm(e: any) {
        e.preventDefault();

        // if(editarUsuario.editar && editarUsuario.usuario){

        //     let objUsuario = {
        //         ...editarUsuario.usuario,
        //         nome,
        //         usuario,
        //         senha
        //     }
        //     atualizar(objUsuario)
        //     limparCamposEFecharModal()

        // }else{
        let objUsuario = {
            nome,
            usuario,
            senha
        }
        inserirUsu(objUsuario)
        limparCamposEFecharModal()
        // }
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
                    <Label>Qual seu nome:</Label>
                    <Input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Usuario:</Label>
                    <Input
                        type="text"
                        placeholder="Cidade Destino"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />

                    <Label>Senha:</Label>
                    <Input
                        placeholder="Senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />


                </FormGroup>
                <FormGroup>
                    <Button type="submit">Cadastrar Usuario</Button>
                </FormGroup>

            </FormContainer>

        </Modal>
    )
}
