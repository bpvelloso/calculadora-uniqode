import { useEffect, useState } from 'react';
import './App.css';

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
    }
  
  } , [num1, num2, operacao])

  return (
    <div>
      <input type="number" value={num1} 
             onChange={ evento => setNum1(Number(evento.target.value)) }/>
      <div>
        <button className={operacao==='+' ? 'operacao_selecionada' : ''  } 
                onClick={ evento => setOperacao('+') }>+</button>

        <button className={operacao==='-' ? 'operacao_selecionada' : ''  } 
                onClick={ evento => setOperacao('-') }>-</button>

        <button className={operacao==='*' ? 'operacao_selecionada' : ''  } 
                onClick={ evento => setOperacao('*') }>*</button>

        <button className={operacao==='/' ? 'operacao_selecionada' : ''  } 
                onClick={ evento => setOperacao('/') }>/</button>
      </div>
      <input type="number" value={num2}
            onChange={ evento => setNum2(Number(evento.target.value)) }/>
      <hr/>
      <input type="number" value={resultado}/>
    </div>
  );
}

export default App;
