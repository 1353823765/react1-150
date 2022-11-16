import React from 'react'

export default function Login(props) {
    console.log(props)
  return (
    <div>
    
      <input></input>
      <button onClick={()=>{
         localStorage.setItem("token","数据")
         props.history.push("/filmname")
      }}>登入</button>
    </div>
  )
}
