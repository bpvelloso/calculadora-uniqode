
interface PropsNumero{
    num:number, 
    setter:React.Dispatch<React.SetStateAction<number>>
}

export default function Numero({num,setter}:PropsNumero) {

    return(
        <input type="number" 
            value={num} 
            onChange={evento => setter(Number(evento.target.value))} 
        />
    )
    
}