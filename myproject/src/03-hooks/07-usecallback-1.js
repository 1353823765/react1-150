import React,{useState} from 'react'
export default function One() {
    const [num,setnum]=useState(0);
    var num1=0
  return (
    <div>
      <button onClick={()=>{
         setnum(num+1)
         num1++
      }}>ADD</button>{num}=={num1}
    </div>
  )
}
