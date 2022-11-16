import React,{useState} from 'react'
import {cityInfo} from "./actiontype/showtabar"
import {connect} from "react-redux"
//  import store from '../redux/store'
function City(props) {
  console.log(props)
     const [city]=useState(["北京","上海","广州","深圳"])
  return (
    <div>
    <div>city
    </div>
      <ul>
      {
        city.map(item=>
            <li key={item} onClick={()=>{
             props.change(item)
            //  store.dispatch(
            //   cityInfo(item))   
              props.history.push("/filmbox")
            }}>{item} </li>
            
        )
      }
      </ul>
    </div>
  )
}
const mapDispatch={
  change(item){
    return cityInfo(item)
  
  }
}
export default connect(null,
   mapDispatch
  )(City)