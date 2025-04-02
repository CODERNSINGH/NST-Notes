import logo from './logo.svg';
import {use, useState} from 'react'
import './App.css';

function App() {
  // const [login,logout] = useState(false)
  // const [button,changebtn] = useState(false)
  const [isLoggedIn ,setLoggedIn] = useState(false)
  const [value, setValue] = useState(0)

  function handleonclick(){
    setLoggedIn(!isLoggedIn)
    
  }
  function hangeleChangeInput(event){
    setValue((event.target.value))
    // setValue(tem)

  }
  return (
    <div className="App">
      <h1 id={isLoggedIn?"changegreeen":"changered"}>{isLoggedIn?"Loged in": "Logout"}</h1>

      <p>Your Special Code {value}</p>
      <input onChange ={hangeleChangeInput} id="input" placeholder='Enter Pin' type='number' ></input>
      <h1>{value == 69 || value == 96 ?"Naughty - Naughty":""}</h1>
      <button onClick={handleonclick}>{isLoggedIn?"Log Out":"Log In"}</button>
    </div>
  );
}

export default App;
