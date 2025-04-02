// import logo from './logo.svg';
// import {use, useState} from 'react'
import './App.css';
import Header from './components/header';
import Home from "./screen/Home/Home"
import Footer from './components/Footer';
import {Logo , Input} from "./screen/navbar" // it's called Named Export


function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Logo logo = "Logo Kidhare"/>
    <Input/>
    <Footer/>
    </>
  )
}

export default App;
