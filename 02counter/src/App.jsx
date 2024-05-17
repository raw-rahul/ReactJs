import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  // let counter = 15;
  let [counter, setCounter]  = useState(15);


  const addValue = ()=>{
    if(counter < 20) setCounter(counter+1);
  }

  const remValue = ()=>{
    // if(counter <= 0) setCounter(0);
    // else setCounter(counter-1);
    if(counter>0 ){
      counter = counter - 1
      setCounter(counter)
    }
  }


  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter Value: {counter}</h2>
    <button
    onClick={addValue}
    >Add Value {counter}</button>
    <br/>
    <button
    onClick={remValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
