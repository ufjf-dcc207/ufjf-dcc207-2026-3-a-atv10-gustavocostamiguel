import { useState } from 'react'
import './App.css'
import Litro from './Litro'

function App() {
  const garrafa01 = ["red","blue","green","yellow"]

  return (
    <>
      <Litro conteudo={garrafa01}/>
    </>
  )
}

export default App
