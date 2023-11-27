import axios from "axios";
import {
    ReactNode,
    createContext,
    useState,
    useEffect
} from "react";
import { toast } from "react-toastify";
import { Loading } from "../Loading";
// import { Loading } from "../components/Loading";
interface PropsUsuarioContext {
    usuarios: any;
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

    const [usuarios, setUsuario] = useState<RouteData[]>([]);
    const [editarUsuario, setEditarUsuario] = useState<any>({ editar: false, usuarios: null })
    const [loadingVisible, setLoadingVisible] = useState(false);


    useEffect(() => {
        setLoadingVisible(true);
        axios.get('http://localhost:3000/usuarios')
            .then((res) => {
                setLoadingVisible(false)
                setUsuario(res.data)
            })
    }, [])



    const inserirUsu = (obj: any) => {
        setLoadingVisible(true);
        axios.post('http://localhost:3000/usuarios', obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                setLoadingVisible(false)
                setUsuario((prevUsuario) => [...prevUsuario, res.data]);
                toast.success("Usuario Cadastrada com Sucesso!");
            })
    }


    const deletar = (id: any) => {
        setLoadingVisible(true);
        axios.delete('http://localhost:3000/usuarios/' + id)
            .then((res) => {
                axios.get('http://localhost:3000/usuarios')
                    .then((res) => {
                        setLoadingVisible(false)
                        setUsuario(res.data)
                        toast.success("Deletado com Sucesso!");
                    })
            })
    }


    const atualizar = (obj: any) => {
        var id = obj.id
        setLoadingVisible(true);
        axios.put('http://localhost:3000/usuarios/' + id, obj, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                axios.get('http://localhost:3000/usuarios')
                    .then((res) => {
                        setLoadingVisible(false)
                        setUsuario(res.data)
                        toast.success("Editado com Sucesso!");
                    })
            })
    }


    function funEditarUsuarioDefault() {
        setEditarUsuario({ editar: false, usuarios: null })
    }


    function funEditarUsuario(data: any) {
        setEditarUsuario(data)
    }


    return (
        <UsuarioContext.Provider value={{
            usuarios,
            inserirUsu,
            deletar,
            funEditarUsuario,
            funEditarUsuarioDefault,
            atualizar,
            editarUsuario
        }}>
            <Loading visible={loadingVisible} />
            {children}
        </UsuarioContext.Provider>
    )
}
