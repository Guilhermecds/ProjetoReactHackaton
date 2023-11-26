import axios from "axios";
import {
    ReactNode,
    createContext,
    useState,
    useEffect
} from "react";
import { toast } from "react-toastify";
// import { Loading } from "../components/Loading";
interface PropsRotasContext {
    rotas: any;
    inserir: any;
    deletar: any;
    funEditarRotas: any;
    funEditarRotasDefault: any;
    atualizar: any;
    editarRota: any
}

interface RouteData {
    id: number;
    partida: string;
    chegada: string;
}

export const RotasContext = createContext(
    {} as PropsRotasContext
)

interface PropsRotasProvider {
    children: ReactNode
}
export function RotasProvider({ children }: PropsRotasProvider) {

    // const [rotas, setRotas] = useState([])
    const [rotas, setRotas] = useState<RouteData[]>([]);

    const [editarRota, setEditarRota] = useState<any>({ editar: false, rotas: null })


    useEffect(() => {
        axios.get('http://localhost:3000/rotas')
            .then((res) => {
                setRotas(res.data)
            })
    }, [])



    const inserir = (obj: any) => {
        axios.post('http://localhost:3000/rotas', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setRotas((prevRotas) => [...prevRotas, res.data]);
                toast.success("Rota Cadastrada com Sucesso!");
            })
    }


    const deletar = (id: any) => {
        axios.delete('http://localhost:3000/rotas/' + id)
            .then((res) => {
                axios.get('http://localhost:3000/rotas')
                    .then((res) => {
                        setRotas(res.data)
                        toast.success("Deletado com Sucesso!");
                    })
            })
    }


    const atualizar = (obj: any) => {
        var id = obj.id
        axios.put('http://localhost:3000/rotas/' + id, obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                axios.get('http://localhost:3000/rotas')
                    .then((res) => {
                        setRotas(res.data)
                        toast.success("Editado com Sucesso!");
                    })
            })
    }


    function funEditarRotasDefault() {
        setEditarRota({ editar: false, rotas: null })
    }


    function funEditarRotas(data: any) {
        setEditarRota(data)
    }


    return (
        <RotasContext.Provider value={{
            rotas,
            inserir,
            deletar,
            funEditarRotas,
            funEditarRotasDefault,
            atualizar,
            editarRota
        }}>
            {children}
        </RotasContext.Provider>
    )
}
{/* <Loading visible={false} /> */ }
