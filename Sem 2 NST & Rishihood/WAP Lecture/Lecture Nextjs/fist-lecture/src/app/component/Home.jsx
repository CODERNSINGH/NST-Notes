import React, { useContext } from 'react'
import Header from './Header'
import Footer from './Footer'

import { AppContext } from '../page'



export default function Homeop() {
    const globalState = useContext(AppContext)
    
  return (
    <div>

    <h1>Home</h1>
    <Header/>
    <h3>{globalState.bodyText || ("Login kar le bro i from NST and i love Technologia")}</h3>
    <Footer/>
    </div>
  )
}
