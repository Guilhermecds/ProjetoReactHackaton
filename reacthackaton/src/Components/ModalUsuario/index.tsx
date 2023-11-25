import Modal from 'react-modal' 
import { Button, FormContainer, Textarea, Input, Label } from '../CustonModal/style';
import { FormGroup } from './style';
 
interface PropsModal {
    modalVisible: boolean;
    fecharModal: () => void;
    // editarRota: (data: any) => void;
}

export function ModalUsuario(props: PropsModal) {

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



            <FormContainer
                
            >
                <FormGroup>
                    <Label>Qual seu nome:</Label>
                    <Input
                        type="text"
                        placeholder="Nome"
                    />
                </FormGroup>

                <FormGroup>
                    <Label>Usuario:</Label>
                    <Input
                        type="text"
                        placeholder="Cidade Destino"
                    />

                    <Label>Senha:</Label>
                    <Input
                        placeholder="Senha"
                    />


                </FormGroup>
                <FormGroup>
                    <Button type="submit">Cadastrar</Button>

                </FormGroup>

            </FormContainer>

        </Modal>
    )
}
