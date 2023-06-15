import BotaoOperacao from "./BotaoOperacao"
import './operacoes.css'

interface IPropsPainelOperacoes{
    operacao: string,
    setOperacao: React.Dispatch<React.SetStateAction<string>>
}

export default function PainelOperacoes({ operacao, setOperacao }:IPropsPainelOperacoes){
    return (
        <div>
            <BotaoOperacao label='+'
                operacao={operacao} setOperacao={setOperacao} />
            <BotaoOperacao label='-'
                operacao={operacao} setOperacao={setOperacao} />
            <BotaoOperacao label='*'
                operacao={operacao} setOperacao={setOperacao} />
            <BotaoOperacao label='/'
                operacao={operacao} setOperacao={setOperacao} />   
            <BotaoOperacao label='%'
                operacao={operacao} setOperacao={setOperacao} />   
        </div>
    )
}