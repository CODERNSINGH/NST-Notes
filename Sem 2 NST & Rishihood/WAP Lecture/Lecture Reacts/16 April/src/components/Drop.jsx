import React, { useState } from 'react'
import { ArrowDown } from 'lucide-react';
import './drop.css'
export default function Drop() {
    const [Visible,isVisible] = useState(false)

  return (

    <div className='body'>
        <div className="app">
            <div className='container' onClick={()=>{isVisible(!Visible)}}>
                <h1 style={{fontSize: '16px'}}>Genral Setting</h1>
                <p>i am an according</p>

                <button  >Expend v</button>
            </div>
            {Visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur mollitia assumenda eligendi qui deserunt repellendus illum illo molestias ex earum hic, sed, eaque consequatur id laborum voluptate libero distinctio perspiciatis.</p> }
        </div>
        <div className="app">
            <div className='container' onClick={()=>{isVisible(!Visible)}}>
                <h1 style={{fontSize: '16px'}}>Genral Setting</h1>
                <p>i am an according</p>

                <button  >Expend v</button>
            </div>
            {Visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur mollitia assumenda eligendi qui deserunt repellendus illum illo molestias ex earum hic, sed, eaque consequatur id laborum voluptate libero distinctio perspiciatis.</p> }
        </div>
        <div className="app">
            <div className='container' onClick={()=>{isVisible(!Visible)}}>
                <h1 style={{fontSize: '16px'}}>Genral Setting</h1>
                <p>i am an according</p>

                <button  >Expend v</button>
            </div>
            {Visible && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur mollitia assumenda eligendi qui deserunt repellendus illum illo molestias ex earum hic, sed, eaque consequatur id laborum voluptate libero distinctio perspiciatis.</p> }
        </div>
        
    </div>
  )
}
