import React, { Component } from 'react'

export default class One extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
  
}
var bus={
    //通过list数组将，订阅的回调函数存储在list里面
    list:[],
 //订阅
 sub(callback){
   console.log(callback) 
   this.list.push(callback)
 },
 //发布
 pub(text){
    this.list.forEach((callback)=>
     callback&& callback(text)  )
 }
}
//订阅者
bus.sub((value)=>{
    //调用sub时里面的箭头函数会被当做函数的实参传第过去通过list储存进去
  console.log("111111",value)
})
bus.sub((value)=>{
    console.log("22222222",value)
})
bus.sub((value)=>{
  console.log("222332",value)
})

setTimeout(()=>bus.pub("调用函数"),0)
//  var arr=[1,2,3,4,5,6,7]
//  arr.forEach(item=>console.log(item))