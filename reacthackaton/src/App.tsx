import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Components/Header'
import { Rotas } from './Components/Rotas'
import { Footer } from './Components/Footer'
import { CustomModal } from './Components/CustonModal'
import { GlobalStyle } from './global'

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


      <Footer />


    </>
  )
}

export default App
