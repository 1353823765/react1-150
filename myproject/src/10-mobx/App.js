import React from 'react'
import {autorun,observable} from "mobx"
export default function App() {
    //基本类型
  let observableNumber=observable.box(10)
  let name=observable.box("tom")
  autorun(()=>{
    console.log(observableNumber.get())
  })
  autorun(()=>{
    console.log(name.get())
  })
  setTimeout(()=>{observableNumber.set(200)
name.set("jarry")
},1000)
// 引用类型创建一个观察对象
let obj=observable({
    name:"tom",
    age:19
})
//监听对象
autorun(()=>{
    console.log("观察前",obj.name)
})

setTimeout(()=>{
    obj.name="jarry"
},2000)
  return (
    
    <div>
      1111 
    </div>
  )
}
