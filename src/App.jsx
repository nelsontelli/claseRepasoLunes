import { useState } from 'react'
import './App.css'
import Tarjeta from './Components/tarjeta'
import Formulario from './Components/Formulario'

function App() {
  
  const [bday, setBday] = useState({
    name: "",
    date: null,
    invt: ""
  })

  const [styles, setStyles] = useState({
    background: "transparent",
    color: "white",

  })
  
  return (
    <>
      
      <Formulario setBday={setBday} setStyles={setStyles} />
      <Tarjeta bday={bday} styles={styles} />
    </>
  )
}

export default App
