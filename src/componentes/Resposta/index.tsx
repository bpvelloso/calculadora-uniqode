export default function Resposta({resultado}:{resultado:number}) {

    return(
        <div>
            <input type="number" value={resultado} disabled/>
        </div>
    )
    
}