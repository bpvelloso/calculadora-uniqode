import React, { useEffect, useState } from 'react';
import './Calculadora.css';
import Numero from '../Numero';
import Resposta from '../Resposta';

function Calculadora() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operacao, setOperacao] = useState('+')
  const [resultado, setResultado] = useState(0)

  useEffect(() => {
    if(operacao==='+')
      setResultado(num1 + num2)  
    if(operacao==='-')
      setResultado(num1 - num2)  
    if(operacao==='*')
      setResultado(num1 * num2)  
    if(operacao==='/')
      setResultado(num1 / num2)  
  }, [num1,num2,operacao])

  return (
    <div>
      <Numero num={num1} setter={setNum1} />
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
      <Numero num={num2} setter={setNum2} />
      <Resposta resultado={resultado} />
    </div>
  );
}

export default Calculadora;
