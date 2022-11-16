import React,{useEffect,useState} from 'react'
export default function One() {
    const [text,settext]=useState("REACT")
    useEffect(()=>{
        settext(text.substring(1,0).toLowerCase()+text.substring(1))
    },[text])
  return (
    <div>
  {text}
      <button onClick={()=>{settext("QWE")}}>小写</button>
    </div>
  )
}

