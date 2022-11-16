import React, { Component } from 'react'
class Two extends Component {
  state={
    list:""
  }
  UNSAFE_componentWillReceiveProps(nextProps){
    console.log(nextProps)
    console.log("我是componentWillReceiveProps")
    this.setState({list:nextProps})
 }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
export default class One extends Component {
     state={
        text:"111"
     }
     constructor(){
      super();
      console.log("我是constructor")
     }
     //第一阶段3个生命周期老板
     UNSAFE_componentWillMount(){
        console.log("我是WillMount")
     }
     componentDidMount(){
        console.log("我是DidMount")
     }
     //第2阶段5和生命周期
   
     shouldComponentUpdate(){
    console.log("我是shouldComponentUpdate")
    return true
 }
  UNSAFE_componentWillUpdate(){

    console.log("我是WillUpdateUpdate")
  }
  componentDidUpdate(){
    console.log("我是componentDidUpdate")
  }
  
    
  render() {
     console.log("我是render")
    return (
      <div>
        <button onClick={()=>{this.setState({text:"222"})}}>EMO</button>
        {this.state.text}
        <Two></Two>
      </div>
    )
  }
  
}



