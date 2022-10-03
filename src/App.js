
import './App.css';

function App() {
  document.title='ReactCalc'
  return (
    <div className="App">
      <h1>Lucas Gusmão Valduga</h1>
      <Calculador />
    </div>
  );
}

function Calculador(props) {
  return (
    <div id='calc'>
      <h3>Calculadora</h3>
      <Display />
      <Buttons />
    </div>
  )
}

function Display(props) {
  return (  
    <div id='display'> 
      <div id='previous'>previous test</div>
      <div id='current'>current test</div>
    </div>
  )
}

function Buttons(props) {
  return (
    <div id='buttons_container'>
      <button class="op">CE</button>
      <button class="op">C</button>
      <button class="op">DEL</button>
      <button class="op">/</button>
      <button class="number">7</button>
      <button class="number">8</button>
      <button class="number">9</button>
      <button class="op">*</button>
      <button class="number">4</button>
      <button class="number">5</button>
      <button class="number">6</button>
      <button class="op">-</button>
      <button class="number">1</button>
      <button class="number">2</button>
      <button class="number">3</button>
      <button class="op">+</button>
      <button class="number">0</button>
      <button class="number">,</button>
      <button id="equal">=</button>
    </div>
  )
}
export default App;