import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Components/Header'
import { Rotas } from './Components/Rotas'
import { Footer } from './Components/Footer'
import { CustomModal } from './Components/CustonModal'
import { GlobalStyle } from './global'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'
import { RotasProvider } from './Components/contexts/rotaContext'
import { ModalUsuario } from './Components/ModalUsuario'
import { UsuarioProvider } from './Components/contexts/usuarioContext'
import { ModalMnutUsuario } from './ModalMnutUsuario'
import { Loading } from "./Components/Loading";

function App() {



  const [isVisibleModal, setIsVisibleModal] = useState(false)
  const [loadingVisible, setLoadingVisible] = useState(true);


  function abrirModal() {
    setIsVisibleModal(true)
  }

  function fecharModal() {
    setIsVisibleModal(false)
  }

  const [isVisibleModalUsuario, setIsVisibleModalUsuario] = useState(false)

  function abrirModalUsuario() {
    setIsVisibleModalUsuario(true)
  }

  function fecharModalUsuario() {
    setIsVisibleModalUsuario(false)
  }

  
  const [isVisibleModalManut, setIsVisibleModalManut] = useState(false)

  function abrirModalManut() {
    setIsVisibleModalManut(true)
  }

  function fecharModalManut() {
    setIsVisibleModalManut(false)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loadingVisible && <Loading visible={true} />}

      <RotasProvider>
        <UsuarioProvider>


          <GlobalStyle />
          <Header
            abrirModal={abrirModal}
            abrirModalUsuario={abrirModalUsuario}
            abrirModalManut={abrirModalManut}
          />
          <Rotas
            abrirModal={abrirModal}
            
          />

          <CustomModal
            modalVisible={isVisibleModal}
            fecharModal={fecharModal}
          />
          <ModalUsuario
            modalVisible={isVisibleModalUsuario}
            fecharModal={fecharModalUsuario}
          />

          <ModalMnutUsuario
             modalVisible={isVisibleModalManut}
             fecharModal={fecharModalManut}
             abrirModal={abrirModalUsuario}
          />
          <ToastContainer />
          <Footer />

        </UsuarioProvider>
      </RotasProvider>
    </>
  )
}

export default App
