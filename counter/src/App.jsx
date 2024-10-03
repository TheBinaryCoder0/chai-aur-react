import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)

  // let counter = 0;

  const increaseValue = () => {
    if(counter<20){
      counter = counter + 1;
    }
    setCounter(counter);
    // setCounter(counter + 1);
  }

  const decreaseValue = () => {
    if(counter>0){
      counter = counter - 1;
    }
    setCounter(counter);
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={increaseValue}>+</button>
      <br></br>
      <button onClick={decreaseValue}>-</button>
    </>
  )
}

export default App
