// Calculadora react
// Lucas Gusmão Valduga


import { useState } from "react";
import './App.css';

function App() {
  document.title='ReactCalc';

  return (
    <div className="App">
      <h1>Lucas Gusmão Valduga</h1>
      <Calculator />
    </div>
  );
}

function Calculator() {
  const [previous,setPrevious] = useState('')
  const [current,setCurrent] = useState('')
  const [operation,setOperation] = useState('')

  function handleClick(e) {
    const value= e.target.innerText;
    if (+value >= 0 || value === ',') {
      addDigit(value);
    } else if(value.substr(0,1) === 'C') {
      clean(value);
    } else if (value === 'DEL') {
      del();
    } else {
      processOperation(value);
    }
  }

  function del() {
    setCurrent(current.slice(0,-1));
  }

  function clean(value) {
    setCurrent('');
    if (value.length === 1) {
      setPrevious('');
      setOperation('');
    }
  }

  function addDigit(value) {
    if (current.includes(',') && value ===',') {
      return
    }
    setCurrent(current+value);
    
  }

  function processOperation(value) {

  }

  return (
    <div id='calc'>
      <h3>Calculadora</h3>
      <Display previous={previous} current={current}/>
      <Buttons func={handleClick}/>
    </div>
  )
}

function Display(props) {
  return (  
    <div id='display'> 
      <div id='previous'>{props.previous}</div>
      <div id='current'>{props.current}</div>
    </div>
  )
}

function Buttons(props) {
  
  return (
    <div id='buttons_container'>
      <button className="op" onClick={props.func}>CE</button>
      <button className="op"  onClick={props.func}>C</button>
      <button className="op"  onClick={props.func}>DEL</button>
      <button className="op"  onClick={props.func}>/</button>
      <button className="number"  onClick={props.func}>7</button>
      <button className="number"  onClick={props.func}>8</button>
      <button className="number"  onClick={props.func}>9</button>
      <button className="op"  onClick={props.func}>*</button>
      <button className="number"  onClick={props.func}>4</button>
      <button className="number"  onClick={props.func}>5</button>
      <button className="number"  onClick={props.func}>6</button>
      <button className="op"  onClick={props.func}>-</button>
      <button className="number"  onClick={props.func}>1</button>
      <button className="number"  onClick={props.func}>2</button>
      <button className="number"  onClick={props.func}>3</button>
      <button className="op"  onClick={props.func}>+</button>
      <button className="number"  onClick={props.func}>0</button>
      <button className="number"  onClick={props.func}>,</button>
      <button id="equal" onClick={props.func}>=</button>
    </div>
  )
}
export default App;