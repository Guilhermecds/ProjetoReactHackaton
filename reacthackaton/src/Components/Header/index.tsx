import {
    BotaoEsquerdo,
    BotaoDireito,
    Cabecalho,
    Titulo,
    BotaoManutUsuario
} from './styles';
import transportePublicoImage from '../../../public/transporte_publico.png';

interface PropsHeader {
    abrirModal: () => void;
    abrirModalUsuario: () => void; 
    abrirModalManut: () => void; 
}


export const Header = (props: PropsHeader) => {
    
    return (

        <Cabecalho>

            <div >
                <h1>Transporte publico</h1>
                <img src={transportePublicoImage} alt="busao" style={{
                       width: '150px',  
                       height: '150px', 
                       marginLeft: '10px',
                    }}/>
            </div>
            

            <BotaoDireito onClick={props.abrirModal}>
              Nova Rota
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
