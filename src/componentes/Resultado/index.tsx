
function Resultado(props:{ valor:number }){
    return(
        <div>
            <hr/>
            <input type="number" value={props.valor} disabled/>
            <hr/>
        </div>
    )
}

export default Resultado