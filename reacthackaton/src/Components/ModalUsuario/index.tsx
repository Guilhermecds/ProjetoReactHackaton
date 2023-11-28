import Modal from 'react-modal'
import { FormGroup, Button, FormContainer, Textarea, Input, Label } from './style';
import { useContext, useState, useEffect } from 'react';
import { UsuarioContext } from '../contexts/usuarioContext';
import { toast } from "react-toastify";

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
        setNome('')
        setUsuario('')
        setSenha('')
        funEditarUsuarioDefault();
        props.fecharModal()
    }


    useEffect(() => {
        if (editarUsuario.editar) {

            setNome(editarUsuario.usuarios?.nome ? editarUsuario.usuarios.nome : '')
            setSenha(editarUsuario.usuarios?.senha ? editarUsuario.usuarios.senha : '')
            setUsuario(editarUsuario.usuarios?.usuario ? editarUsuario.usuarios.usuario : '')

        }

    }, [editarUsuario.editar])

    function enviarForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
      
        if (!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nome)) {
            toast.warning('O nome do usuário não pode conter números ou caracteres especiais.');
            return;
        }
      
        if (editarUsuario.editar && editarUsuario.usuarios) {
          let objUsuario = {
            ...editarUsuario.usuarios,
            nome,
            usuario,
            senha,
          };
          limparCamposEFecharModal();
          atualizar(objUsuario);
        } else {
      
          let objUsuario = {
            nome,
            usuario,
            senha,
          };
          limparCamposEFecharModal();
          inserirUsu(objUsuario);
        }
      }




    return (
        <Modal
            id='modalusuario'
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
                style={{textAlign: 'center'}}
            >Cadastrar Usuario</h2>


            <FormContainer
                onSubmit={(e) => enviarForm(e)}
            >
                <FormGroup>
                    <Label>Qual seu nome:</Label>
                    <Input
                        maxLength={30} 
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
                        maxLength={15} 
                        type="text"
                        placeholder="Usuario"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />

                    <Label>Senha:</Label>
                    <Input
                        maxLength={20} 
                        placeholder="Senha"
                        type='password'
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
