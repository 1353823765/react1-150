import React, { Component } from 'react'

export default class One extends Component {
    state={
        name:""
    }
    UNSAFE_componentWillMount(){
        //主要作用是没有触发render()最后一次修改状态的机会或者
        //状态逻辑代码太多可以直接写在这里-----初始化数据那不真实的dom节点
        console.log("Will-Mount")
        console.log(  document.getElementById("s1"))   
        }
    componentDidMount(){
        //数据请求放在DidMount中
        //订阅模式函数
        //基于创建完的Dom进行初始化，Dom创建完之后
        //访问真实DOM
        console.log(  document.getElementById("s1"))   
        console.log("Did-Mount")
       }
       
  render() {
  console.log("render")
    return (
      <div>
       <span id='s1'></span>
      </div>
    )
  }
}
