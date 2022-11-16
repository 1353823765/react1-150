import React,{useEffect}from 'react'
import stroe from '../mobx/stroe'
export default function Dital(props) {
    //第一种传参通过动态路由
    console.log("动态路由传参id值",props.match.params.myid)
    //第2中通过query传参
    // console.log( "query传参",   props.location.query.myid )
//第三种通过state传参
// console.log( "state传参",   props.location.query.myid )
     useEffect(()=>{
      console.log("cerate创建了")
      //直接修改stroe
      // stroe.isshow=false
      //通过action监控方法来修改value值，
      stroe.changefalse()
      console.log(stroe.isshow)
      return ()=>{
        console.log("dispatch")
        // stroe.isshow=true
        stroe.changetrue()
        console.log(stroe.isshow)
      }
     },[])
  return (
    <div>
      通过id获取的信息
    </div>
  )
}
