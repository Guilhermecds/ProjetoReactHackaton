import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Header } from './Components/Header'
import { Rotas } from './Components/Rotas'
import { Footer } from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Header />

          <Rotas />


      <Footer />


    </>
  )
}

export default App
