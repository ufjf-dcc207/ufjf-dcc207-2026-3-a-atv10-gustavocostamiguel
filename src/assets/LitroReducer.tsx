export function LitroReducer(estado,acao){
    switch (acao.tipo) {
        case "seleção":
            return {...estado};
    
        default: return estado;
    }
}

