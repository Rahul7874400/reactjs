import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [value,setValue] = useState(15)

  const addValue = ()=>{
    value = value + 1
    if(value>100){
      value = 15
      return 
    }
    setValue(value)
    console.log(value)
  }

  const removeValue = ()=>{
    value = value - 1
    if(value < 0){
      value = 0
      return
    }
    setValue(value)
    console.log(value)
  }

  return (
    <>
      <h1> Cahi aur react </h1>
      <h2>Counter Value : {value} </h2>

      <button 
      onClick={addValue}
      >
        Add Value {value}</button>
      <button 
      onClick={removeValue}
      >Decrease Value {value}</button>
    </>
  )
}

export default App
