import React from 'react'
import './style.css'
export default function Button(props) {
  return (
    <div>
      <button className='button'>{props.buttonText}</button>
    </div>
  )
}
