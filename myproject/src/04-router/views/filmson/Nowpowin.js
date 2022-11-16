import axios from 'axios'
import React,{useEffect,useState} from 'react'
export default function Nowpowin() {
  useEffect(()=>{
    axios.get(
 
      "/api/mmdb/movie/v3/list/hot.json?ct=%E7%A7%A6%E7%9A%87%E5%B2%9B&ci=122&channelId=4"
    ).then(res=>console.log(res))
  })
  return (
    <div style={{width:"200px", "background":"orange"}}> 
       页面网页Nowpowin
 
    </div>
  )
}
