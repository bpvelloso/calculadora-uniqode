
interface IPropsBotaoOperacao{
    label: string,
    operacao: string,
    setOperacao: React.Dispatch<React.SetStateAction<string>>
}

export default function BotaoOperacao(
            {label, operacao, setOperacao}:IPropsBotaoOperacao
        ){
        let classeBt = 'botao_operacao'
        if(operacao===label){
            classeBt += ' operacao_selecionada' 
        }
    return (
        <button className={classeBt} 
                onClick={ evento => setOperacao(label) }>{label}</button>
    )
}