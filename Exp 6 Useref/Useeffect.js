import React from 'react'
import { useState,useEffect } from 'react'

function Useeffect(){
    const [count, setCount] = useState(0)
    useEffect(()=>{
        document.title= `you clicked ${count} times`

    },[count])

    return(
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>Click me</button>
        </div>
    )
}

export default Useeffect;