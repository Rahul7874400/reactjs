import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [length , setLength] = useState(8)
  const [numberAllowed , setNumberAllowed] = useState(false)
  const [charAllowed , setCharAllowed] = useState(false)
  const [Password , setPassword] = useState("")
  const [copy, setCopy] = useState("copy")


  const passwordRef = useRef(null)

  // generate password
  const passwordGenerate = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"

    if(charAllowed) str += "~!@#$%^&*()[]{}`."

    for (let i = 1; i <= length; i++) {
      let index = Math.floor(Math.random() * (str.length + 1))

      pass += str.charAt(index)
      
    }

    setPassword(pass)
    setCopy("copy")

  } , [length,numberAllowed,charAllowed,setPassword,setCopy])

 const copyPasswordToClip = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,999)
  window.navigator.clipboard.writeText(Password)
  //alert('copied')
  setCopy("copied")
 },[Password,setCopy])

  useEffect(()=>{
    passwordGenerate()
  },[length,numberAllowed,charAllowed,passwordGenerate])



  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">

      <input 
      type="text"
      value={Password}
      className='outline-none w-full py-1 px-3'
      placeholder='Password'
      readOnly
      ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClip}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
      >{copy}</button>
      </div> 
      <div className='flex text-sm gap-c=x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cluser-pointer'
          onChange={(e)=>{ setLength(e.target.value) }}
          />
          <label> Length {length}</label>
        </div>
        <div className='flex item-center gap-x-1'>
          <input 
          type="checkbox" 
          defaultValue={numberAllowed}
          id='numberInput'
          onChange={() => { setNumberAllowed((pre) => !pre)}}
          />

          <label > Numbers </label>
        </div>

        <div className='flex item-center gap-x-1'>
          <input 
          type= "checkbox"
          defaultValue={charAllowed}
          id='charInput'
          onChange={()=>{ setCharAllowed((pre) => !pre) }} />

          <label > Symbol </label>
        </div>
      </div>
      </div>
     </>
  )
}

export default App
