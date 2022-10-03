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

  const addDigit = (e) => {
    const digit = e.target.value
    console.log(digit)
    setCurrent = current + digit
  }

  function processOperation() {

  }

  return (
    <div id='calc'>
      <h3>Calculadora</h3>
      <Display previous={previous} current={current}/>
      <Buttons op={processOperation} digit={addDigit}/>
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
      <button className="op" onClick={props.op}>CE</button>
      <button className="op" onClick={props.op}>C</button>
      <button class="op" onClick={props.op}>DEL</button>
      <button class="op" onClick={props.op}>/</button>
      <button class="number" onClick={props.digit}>7</button>
      <button class="number" onClick={props.digit}>8</button>
      <button class="number" onClick={props.digit}>9</button>
      <button class="op" onClick={props.op}>*</button>
      <button class="number" onClick={props.digit}>4</button>
      <button class="number" onClick={props.digit}>5</button>
      <button class="number" onClick={props.digit}>6</button>
      <button class="op" onClick={props.op}>-</button>
      <button class="number" onClick={props.digit}>1</button>
      <button class="number" onClick={props.digit}>2</button>
      <button class="number" onClick={props.digit}>3</button>
      <button class="op" onClick={props.op}>+</button>
      <button class="number" onClick={props.digit}>0</button>
      <button class="number" onClick={props.digit}>,</button>
      <button id="equal" onClick={props.op}>=</button>
    </div>
  )
}
export default App;