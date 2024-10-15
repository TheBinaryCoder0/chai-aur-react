import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let [counter, setCounter] = useState(0) // USE THIS WHEN USING counter = counter + 1 and setCounter(counter)
  const [counter,setCounter] = useState(0) // USE THIS WHEN USING setCounter(counter + 1)
  
  // YAHA counter AUR setCounter KA NAAM KUCH BHI HO SAKTA HAI


  // let counter = 0;

  const addValue = () => {
    // counter = counter + 1;
    // setCounter(counter);
    if(counter<20){
      setCounter(counter + 1);
    }
    // console.log(counter);
  }

  const minusValue = () => {
    // counter = counter - 1;
    // setCounter(counter);
    if(counter>0){
      setCounter(counter - 1);
    }
    // console.log(counter);
  }

  return (
    <>
      <h1>Aman Shahi</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >+ {counter}</button>
      <br></br>
      <button
      onClick={minusValue}
      >- {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
