
interface IPropsCampoNumerico {
    valor:number, 
    setValor:React.Dispatch<React.SetStateAction<number>>,
    label: string 
}

export default function CampoNumerico({label, valor, setValor}:IPropsCampoNumerico) {

    
    return(
        <div>
            {label}:
            <input type="number" value={valor} 
                onChange={ evento => setValor(Number(evento.target.value)) }/>
        </div>
        )
}