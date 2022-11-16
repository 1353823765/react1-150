import React from 'react'

export default function Filmname(props) {
  return (
    <div>
    
    <div onClick={()=>{
console.log(props)
props.history.push("/mylist")
    }}>我的电影清单列表</div>
    </div>
  )
}
