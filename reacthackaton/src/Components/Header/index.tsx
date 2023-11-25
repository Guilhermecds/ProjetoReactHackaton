import {
    BotaoEsquerdo,
    BotaoDireito,
    Cabecalho,
    Titulo
} from './styles';


interface PropsHeader {
    abrirModal: () => void;
    abrirModalUsuario: () => void; 
}


export const Header = (props: PropsHeader) => {
    return (

        <Cabecalho>

            <div>

                <h1>Transporte publico</h1>
                
            </div>
            

            <BotaoDireito onClick={props.abrirModal}>
              Nova rota
            </BotaoDireito>

            <BotaoEsquerdo onClick={props.abrirModalUsuario}>
              Cadastrar Usuario
            </BotaoEsquerdo>

        </Cabecalho>


    )
}
