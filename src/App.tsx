
import { useState } from 'react'
import './App.css'
import Litro from './Litro'

type Cor = "red" | "blue" | "yellow" | "green"
type Garrafa = Cor[]

const fase1: Garrafa[] = [
  ["red", "blue", "yellow"],
  ["blue", "yellow", "red"],
  ["yellow", "red", "blue"],
  []
]

function App() {
  const [garrafas, setGarrafas] = useState<Garrafa[]>(fase1)
  const [selecionado, setSelecionado] = useState<number | null>(null)

  function clicarGarrafa(indice: number) {
    if (selecionado === null) {
      if (garrafas[indice].length > 0) {
        setSelecionado(indice)
      }
      return
    }

    if (selecionado === indice) {
      setSelecionado(null)
      return
    }

    const origem = [...garrafas[selecionado]]
    const destino = [...garrafas[indice]]

    const cor = origem[origem.length - 1]

    if (cor === undefined) return

    // Verifica se pode receber o líquido
    if (
      destino.length === 3 ||
      (destino.length > 0 &&
        destino[destino.length - 1] !== cor)
    ) {
      return
    }

    // Conta os líquidos iguais no topo
    let quantidade = 0

    for (
      let i = origem.length - 1;
      i >= 0 && origem[i] === cor;
      i--
    ) {
      quantidade++
    }

    // Transfere respeitando a capacidade
    const espaco = 3 - destino.length
    const total = Math.min(quantidade, espaco)

    for (let i = 0; i < total; i++) {
      destino.push(origem.pop()!)
    }

    const novaLista = [...garrafas]

    novaLista[selecionado] = origem
    novaLista[indice] = destino

    setGarrafas(novaLista)
    setSelecionado(null)
  }

  function verificarVitoria() {
    return garrafas.every((g) =>
      g.length === 0 ||
      (g.length === 3 && g.every((c) => c === g[0]))
    )
  }

  function reiniciar() {
    setGarrafas(fase1.map((g) => [...g]))
    setSelecionado(null)
  }

  return (
    <main className="jogo">

      <h1>Liquid Sort</h1>

      <p>Organize as cores nas garrafas!</p>

      <section className="garrafas">
        {garrafas.map((g, i) =>
          <Litro
            key={"l" + i}
            conteudo={g}
            selecionado={i === selecionado}
            onClick={() => clicarGarrafa(i)}
          />
        )}
      </section>

      {verificarVitoria() && (
        <h2>Parabéns! Você venceu!</h2>
      )}

      <button onClick={reiniciar}>
        Reiniciar fase
      </button>

    </main>
  )
}

export default App

