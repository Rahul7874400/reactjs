import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 
     rounded-xl mb-4' > TailWind </h1>

     <Card userName = "Rahul"/>
     <Card/>


    </>
  )
}

export default App
