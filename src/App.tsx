import { useEffect, useState } from 'react';
import './App.css';
import Resultado from './componentes/Resultado';
import CampoNumerico from './componentes/CampoNumerico';
import PainelOperacoes from './componentes/PainelOperacoes';


function App() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [resultado, setResultado] = useState(0)
  const [operacao, setOperacao] = useState('+')

  useEffect( ()=>{
    if(operacao==='+'){
      setResultado(num1 + num2)
    }else if(operacao==='-'){
      setResultado(num1 - num2)
    }else if(operacao==='*'){
      setResultado(num1 * num2)
    }else if(operacao==='/'){
      setResultado(num1 / num2)
    }else if(operacao==='%'){
      setResultado(num1 % num2)
    }
  } , [num1, num2, operacao])

  return (
    <div>
      <CampoNumerico valor={num1} setValor={setNum1} label="#1"/>
      <PainelOperacoes operacao={operacao} setOperacao={setOperacao} />
      <CampoNumerico valor={num2} setValor={setNum2} label="#2" />
      <Resultado valor={resultado} />
    </div>
  );
}

export default App;
