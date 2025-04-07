// import logo from './logo.svg';
// import {use, useState} from 'react'
import './App.css';
import Header from './components/header';
import Home from "./screen/Home/Home"
import Footer from './components/Footer';
import {Logo , Input} from "./screen/navbar" // it's called Named Export
import { useState,useEffect } from 'react';




function App() {

const [productsop,setproducts] = useState([])
  async function getProduct(){
    // fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    // .then(res => res.json())
    // .then(console.log);}
    let data = await fetch('https://dummyjson.com/products?limit=10&skip=10&select=title,price')
    let final = await data.json()
    setproducts(final.products)
  }

  getProduct() // it will rerender many Time

  // useEffect(()=>{
  //   console.log("Here we passing empty array depency this will call once not rerender")
  //   getProduct()
  // },[])

  // HandleBuy Button

  function handleBuyButton(){

  }
  
  return (
    <>
    <Header/>
    <Home/>
    <Logo logo = "Logo Kidhare"/>
    <Input/>
    <Footer/>
    <button>Call API</button>
    {productsop.map((x)=> {
      return <div className='products'>
      <h3>{x.id}. {x.title}</h3>
      <span><h2>Price: </h2></span>
      <p>{x.price}</p>
      <button onClick={handleBuyButton(x.id)}>Buy</button>
      <button>Add to Cart</button>
      </div>

    } )}
    
    </>
  )
}

export default App;
