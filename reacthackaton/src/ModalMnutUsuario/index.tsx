import Modal from 'react-modal'
import { useContext, useState, useEffect, FormEvent } from 'react';
import { DeleteButton, EditButton, Table, Td, Th } from './styles';
import { UsuarioContext } from '../Components/contexts/usuarioContext';
// import { UsuarioContext } from '../contexts/usuarioContext';

interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
    abrirModal: () => void;
    // editarRota: (data: any) => void;
}

export function ModalMnutUsuario(props: PropsModal) {

    const [nome, setNome] = useState('')
    const [usuario, setUsuarios] = useState('')
    const [senha, setSenha] = useState('')

    const {usuarios, deletar, inserirUsu, atualizar, funEditarUsuario, funEditarUsuarioDefault, editarUsuario } = useContext(UsuarioContext)

    function limparCamposEFecharModal() {
        props.fecharModal()
    }

    function onDeletaRota(e: FormEvent, id: any) {
        e.preventDefault();
        if (id) {
          deletar(id)
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



            <Table>
                <thead>
                    <tr>
                        <Th>Nome</Th>
                        <Th>Usuário</Th>
                        <Th>Senha</Th>
                        <Th>Ações</Th>
                    </tr>
                </thead>
                <tbody>
                {usuarios.map((usuario: any) => (
                        <tr key={usuario.id}>
                            <Td>{usuario.nome}</Td>
                            <Td>{usuario.usuario}</Td>
                            <Td>{usuario.senha}</Td>
                            <Td>
                                <EditButton 
                                    onClick={() => {
                                        funEditarUsuario({ editar: true, usuarios: usuario })
                                        props.abrirModal();
                                        props.fecharModal();
                                    }}
                                >Editar</EditButton>
                                <DeleteButton 
                                    onClick={(e) => onDeletaRota(e,usuario.id)}
                                >Excluir</DeleteButton>
                            </Td>
                        </tr>
                    ))} 
                </tbody>
            </Table>

        </Modal>
    )
}
