import "./estilo.css"

interface PropsHeader {
    abrirModal: () => void;
}


export const Header = (props: PropsHeader) => {
    return (

        <header>

            <div>

                <h1>Transporte publico</h1>
                
            </div>

            <button id="botaoEsquerdo"
                    type="button"
                    onClick={props.abrirModal}
                >
                    Nova Rota
                </button>
        </header>


    )
}
