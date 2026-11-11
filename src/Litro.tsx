export default function Litro({conteudo}){

    return (<ol>
        {conteudo.map(c=><li>{c}</li>)}
    </ol>)
}