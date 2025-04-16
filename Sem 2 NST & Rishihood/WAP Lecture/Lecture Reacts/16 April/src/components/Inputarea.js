import React from 'react'

export default function Inputarea(props) {

  function handleChange(e){
    let tem = e.target.value
    props.getInputText(tem) 
  }
  
    
  return (
    <div>
        <input type='text' placeholder={props['placeholder']} onChange={handleChange}/>
    </div>
  )
}
