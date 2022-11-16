import React, { useState } from 'react'
import {Map} from "immutable"
export default function One() {
    let obj={
        name:"tom",
        age:15
    }
    //创建一个immutable并且添加属性
    let newobj=Map(obj).set("name","jarry").set("age",20)
    
// set()方法为添加对象 
 //获取对象的方法
    //第一种 get()方法获取
    console.log(newobj.get("age"))
    //通过toJS()方法装换为js对象
    console.log(obj,newobj.toJS())
    const [name,setname]=useState(Map({name:"tom",age:20}))
  return ( 
    <div> 
     {name.get("name")}---
      <button onClick={()=>{
       setname(name.set("name","TOM").set("age",50))
      }}>点击</button>
     
    </div>
  )
}
