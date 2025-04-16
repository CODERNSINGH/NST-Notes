import React, { useState } from 'react'

export default function App() {
  const[search,setSearch] = useState("")

  return (
    <div>
      
      <input onChange={handleChange} type="text" placeholder='Search User' />
    </div>
  )
}
