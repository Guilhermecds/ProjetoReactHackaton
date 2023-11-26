import {
    BotaoEsquerdo,
    BotaoDireito,
    Cabecalho,
    Titulo,
    BotaoManutUsuario
} from './styles';


interface PropsHeader {
    abrirModal: () => void;
    abrirModalUsuario: () => void; 
    abrirModalManut: () => void; 
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

            <BotaoManutUsuario onClick={props.abrirModalManut}>
                Manutençâo de Usuario
            </BotaoManutUsuario>

        </Cabecalho>


    )
}
