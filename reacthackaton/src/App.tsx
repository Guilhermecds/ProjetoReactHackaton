import { useState } from 'react'
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

function App() {



  const [isVisibleModal, setIsVisibleModal] = useState(false)

  function abrirModal() {
    setIsVisibleModal(true)
  }

  function fecharModal() {
    setIsVisibleModal(false)
  }

  return (
    <>
      <RotasProvider>

        <GlobalStyle />
        <Header
          abrirModal={abrirModal}
        />
        <Rotas
          abrirModal={abrirModal}
        />

        <CustomModal
          modalVisible={isVisibleModal}
          fecharModal={fecharModal}
        />
        <ToastContainer />
        <Footer />
      </RotasProvider>

    </>
  )
}

export default App
