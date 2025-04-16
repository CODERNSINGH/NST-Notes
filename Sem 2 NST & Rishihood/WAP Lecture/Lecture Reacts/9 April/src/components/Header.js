import React, { useState } from 'react'
import Inputarea from './Inputarea'
import Button from './Button'
import '../index.css'



export default function Header() {
    const [search, setSearch]  = useState("")
    const[emailText,setEmailText] = useState("")
  return (
    <div className='header'>
        <h3>Newton School of Scaler</h3>
        <Inputarea placeholder='Enter Your Name' getInputText={setSearch}/>
        <Inputarea placeholder ="Enter Your Email" getInputText={setEmailText}/>
        <Button buttonText='SUBMIT'/>
        <h4>{search}</h4>
        <h4>{emailText}</h4>
    </div>
  )
}
