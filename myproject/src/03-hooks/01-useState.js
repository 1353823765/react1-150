import React from 'react'
import { useState } from 'react'
export default function One () {
    const  [start,setStart]=useState("起始状态")
   
  return (
    <div>
    <button onClick={()=>{
        setStart("终止状态")
    }}>ANNI</button>
      {start}

    </div>
  )
}
