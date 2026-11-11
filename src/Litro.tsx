export default function Litro({conteudo, selecionado}){

    return (
    <ol>
        {selecionado && <li>X</li>}
        {conteudo.map((c,k)=><li key={"c"+k}>{c}</li>)}
    </ol>
    )
}