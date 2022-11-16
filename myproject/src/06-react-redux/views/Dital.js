import React,{useEffect}from 'react'
// import store from '../redux/store'
import {connect} from "react-redux"
import {showA,showB} from "../views/actiontype/showtabar"
 function Dital(props) {
  let {showA,showB,match}=props
  console.log(props)
    //第一种传参通过动态路由
    console.log("动态路由传参id值",props.match.params.myid)
    //第2中通过query传参
    // console.log( "query传参",   props.location.query.myid )
//第三种通过state传参
// console.log( "state传参",   props.location.query.myid )
     useEffect(()=>{
      props.showA()
     console.log("创建状态")
        return ()=>{
          props.showB()
          
        }
     },[showA,showB,match.params.myid])

 
  return (
    <div>
      通过id获取的信息
    </div>
  )
}
export default connect(null,{
  showA,
  showB
}
  
)(Dital)