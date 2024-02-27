import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Rahul from "./rahul.jsx"
import React from 'react'


function App() {
  // const [count, setCount] = useState(0)

  const userName = "Chai aur code"
  return (
    <>
    <h1>Rahul is ready {userName}</h1>
    <Rahul/>
    </>
  )
}

export default App
