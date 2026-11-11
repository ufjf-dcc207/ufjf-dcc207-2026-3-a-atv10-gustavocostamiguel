
type Cor = "red" | "blue" | "yellow" | "green"

type Props = {
  conteudo: Cor[]
  selecionado: boolean
  onClick: () => void
}

export default function Litro({
  conteudo,
  selecionado,
  onClick
}: Props) {

  const espacos = [0, 1, 2]

  return (
    <button
      className={`garrafa ${selecionado ? "selecionado" : ""}`}
      onClick={onClick}
    >

      {espacos.map((i) =>
        <div
          key={"c" + i}
          className={`liquido ${conteudo[i] || "vazio"}`}
        />
      )}

    </button>
  )
}
