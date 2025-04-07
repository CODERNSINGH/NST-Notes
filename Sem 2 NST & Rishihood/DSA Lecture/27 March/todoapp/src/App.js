import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");
  const[time,setTime] = useState("12:00")
  const [allTodos,setAllTodos] = useState([]);
  // const [idxRemove,setRemoveidx] = useState(0)

  function handleTitle(event){
    setTitle(event.target.value)

   
  }

  function handleDescription(event){
    setDescription(event.target.value)

  

  }
  function addTask(){
    
   
    const newArr = [...allTodos,{title,description}];
    setAllTodos(newArr)
    console.log(allTodos)
  }

  function handleRemoveTask(idx){
    // const newArray = [...allTodos]
    // allTodos.splice(idx,1)
    // setAllTodos(newArray)
    const newarr = allTodos.filter((_,i) => i !== idx)
    setAllTodos(newarr)

  }


  return (
    <div className="container text-center">
      <nav className=''>
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Help</li>
        </ul>
      </nav>

      <div className="container">
        <h1>To - Do List</h1>
        <div id='flex-row'>
        <input className='border' onChange={handleTitle} type='text' placeholder='title...'/>
        <input className='border' onChange={handleDescription} type='text' placeholder='desc...'/>
        <button className='border' onClick={addTask}>Submit</button></div>


        {allTodos.map((x,idx) => {return (
          <div className='border'><h1 className='text-3xl' >{x['title']}</h1>
          <p className='text-xl'>{x['description']}</p>
          
          <input type='checkbox'/>
          {/* {setRemoveidx(idx)} */}
          <button className='border' onClick={() => handleRemoveTask(idx)}>Remove</button>
          </div>
        )})}

        
      </div>
    </div>
  );
}


export default App;
