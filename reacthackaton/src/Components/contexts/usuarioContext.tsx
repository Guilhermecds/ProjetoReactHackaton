import axios from "axios";
import {
    ReactNode,
    createContext,
    useState,
    useEffect
} from "react";
import { toast } from "react-toastify";
// import { Loading } from "../components/Loading";
interface PropsUsuarioContext {
    usuario: any;
    inserirUsu: any;
    deletar: any;
    funEditarUsuario: any;
    funEditarUsuarioDefault: any;
    atualizar: any;
    editarUsuario: any
}

interface RouteData {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
}

export const UsuarioContext = createContext(
    {} as PropsUsuarioContext
)

interface PropsUsuarioProvider {
    children: ReactNode
}
export function UsuarioProvider({ children }: PropsUsuarioProvider) {

    const [usuario, setUsuario] = useState<RouteData[]>([]);

    const [editarUsuario, setEditarUsuario] = useState<any>({ editar: false, usuario: null })



    useEffect(() => {
        axios.get('http://localhost:3000/usuario')
            .then((res) => {
                setUsuario(res.data)
            })
    }, [])



     const inserirUsu = (obj: any) => {
       
        axios.post('http://localhost:3000/usuario', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setUsuario((prevUsuario) => [...prevUsuario, res.data]);
                toast.success("Usuario Cadastrada com Sucesso!");
            })
    }


    const deletar = (id: any) => {
        axios.delete('http://localhost:3000/usuario/' + id)
            .then((res) => {
                axios.get('http://localhost:3000/usuario')
                    .then((res) => {
                        setUsuario(res.data)
                        toast.success("Deletado com Sucesso!");
                    })
            })
    }


    const atualizar = (obj: any) => {
        console.log('aa')
        var id = obj.id
        axios.put('http://localhost:3000/usuario/' + id, obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                axios.get('http://localhost:3000/usuario')
                    .then((res) => {
                        setUsuario(res.data)
                        toast.success("Editado com Sucesso!");
                    })
            })
    }


    function funEditarUsuarioDefault() {
        setEditarUsuario({ editar: false, usuario: null })
    }


    function funEditarUsuario(data: any) {
        setEditarUsuario(data)
    }


    return (
        <UsuarioContext.Provider value={{
            usuario,
            inserirUsu,
            deletar,
            funEditarUsuario,
            funEditarUsuarioDefault,
            atualizar,
            editarUsuario
        }}>
            {children}
        </UsuarioContext.Provider>
    )
}
{/* <Loading visible={false} /> */ }
