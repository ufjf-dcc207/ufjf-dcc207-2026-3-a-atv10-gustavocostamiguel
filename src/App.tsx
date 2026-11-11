import { useState } from 'react'
import './App.css'
import Litro from './Litro'

function App() {
  const [selecionado, setSelecionado] = useState(1);
  const garrafas = [
    ["red","blue","green","yellow"],
    ["red","red","yellow"],
  ]

  return (
    <>
      {garrafas.map((g,i)=>
        <Litro key={"l"+i} conteudo={g} selecionado={i==selecionado }/>
      )}
<button onClick={()=>setSelecionado(0)}>0</button>
<button onClick={()=>setSelecionado(1)}>1</button>
    </>
  )
}

export default App
