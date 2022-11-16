import React,{useState} from 'react'
import {cityInfo} from "./actiontype/showtabar"
import store from '../redux/store'
export default function City(props) {
     const [city]=useState(["北京","上海","广州","深圳"])
  return (
    <div>
    <div>city
    </div>
      <ul>
      {
        city.map(item=>
            <li key={item} onClick={()=>{
             store.dispatch(cityInfo(item))   
             props.history.push("/filmbox")
            }}>{item}  </li>
            
        )
      }
      </ul>
    </div>
  )
}
