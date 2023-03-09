import React, { useState } from 'react';

function App() {
  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");
  const operators = ['/', '*', '+', '-', '.'];

  const updateOutput = (value)=>{
    if( (operators.includes(value) && output === '') ||
        (operators.includes(value) && operators.includes(output.slice(-1)))
    ){
      return ;
    }
    setOutput(output + value)
    if(!operators.includes(value)){
      setResult(eval(output + value).toString())
    }
  }
  const showResult = () => {
    setOutput(eval(output).toString())
  }
  const deleteOutput = ()=>{
      if( output ==='')
      { return}
      const value = output.slice(0, -1)
      setOutput(value) 
  }
  const answer=()=>{
    setOutput(output + result)
    setResult(eval(output + result).toString())
  }
   const clear =()=>{
    setOutput('')
    setResult('')
   }

  const createDigits = ()=>{
    const digits =[];

    for(let i = 1; i < 10; i++ ){
      digits.push(
        <button key={i} onClick={()=>updateOutput(i.toString())}>{i}</button>
      )
    }
    return digits;
  }
  return (
    <div className="App">
      <div className = "calculator">
          <div className = 'display'>
            { result ? <span> ({result}) </span> : '' } { output || '0' }
          </div>
          <div className = 'operators'>
            <button onClick={()=>updateOutput('/')}>/</button>
            <button onClick={()=>updateOutput('*')}>*</button>
            <button onClick={()=>updateOutput('+')}>+</button>
            <button onClick={()=>updateOutput('-')}>-</button>
            <button onClick={answer}>Ans</button>
            <button onClick={clear}>Clear</button>
            <button onClick={deleteOutput}>Del</button>

          </div>
          <div className='digits'>
            {createDigits()}
            <button onClick={()=>updateOutput('0')}>0</button>
            <button onClick={()=>updateOutput('.')}>.</button>
            <button onClick={showResult}>=</button>
          </div>
      </div>
    </div>
  );
}

export default App;
