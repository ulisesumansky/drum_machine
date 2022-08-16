import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';


function Botones(){
  return(
    <>
    <button className="teclas"></button>
    </>
  )
}

function DrumMachine(){

  const [prendido, setPrendido] = useState(0);
  const [sonido, setSonido] = useState("");
  
  
  return (
    <>
    <div id="drum-machine">
      <div className="drum-pad">
        <Botones></Botones>
        <Botones></Botones>
        <Botones></Botones>
        <Botones></Botones>
        <Botones></Botones>
        <Botones></Botones>
        <Botones></Botones>
        <Botones></Botones>
        <Botones></Botones>
      </div>
      <div id="display">
        <button id="power">{prendido?"ON":"OFF"}</button>
        <div id='slider'>
          <input type="range" id='volume' name='volume' min="0" max="100" step="10"/>
        </div>
        <div id="sonido">{sonido}</div>
      </div>
    </div>
    </>
  )
 }

function App() {
  return (
    <div className="App">
      <DrumMachine></DrumMachine>
    </div>
  );
}

export default App;
