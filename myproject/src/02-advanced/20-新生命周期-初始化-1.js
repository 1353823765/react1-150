import React, { Component } from 'react'

export default class One extends Component {
    state={
        name:"tom",
        age:15
 
    }
    static getDerivedStateFromProps(nextProps,nextState){
       
        //nextState获得的是状态对象,在return修改的对象会覆盖之前状态对象中对应的值
        //第一次获取去的状态通过return进行操作
        console.log("触发了getDerivedStateFromProps",nextState  )
        return{
         //通过return在render()之前的最后一次修改
               name:nextState.name.substring(0,1).toUpperCase()+nextState.name.substring(1),
               age:81, 
        }  
    }
  render() {
    return (
      <div>
         {this.state.name}-{this.state.age}-{this.Name}
         <button onClick={()=>{
          this.setState({name:"小明"})
          
         }}
         >emo</button>
      </div>
    )
  }
}
