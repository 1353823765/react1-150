
import React from 'react'
// const withButton=withRouter(Button)
export default function Login() {
  return (
    <div>
     <button onClick={()=>{
     localStorage.removeItem("token")
     }}>退出</button>

    </div>
  )
}


