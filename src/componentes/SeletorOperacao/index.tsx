
interface IPropsSeletorOperacao{
    operacao: string,
    setOperacao: React.Dispatch<React.SetStateAction<string>>
}

export default function SeletorOperacao({operacao, setOperacao}:IPropsSeletorOperacao) {
    return(
        <div>
            <button 
            className={operacao==='+'?'operacao_selecionada':''}
            onClick={()=>setOperacao('+')}>+</button>
            <button 
            className={operacao==='-'?'operacao_selecionada':''}
            onClick={()=>setOperacao('-')}>-</button>
            <button 
            className={operacao==='*'?'operacao_selecionada':''}
            onClick={()=>setOperacao('*')}>*</button>
            <button 
            className={operacao==='/'?'operacao_selecionada':''}
            onClick={()=>setOperacao('/')}>/</button>
        </div>
    )    
}