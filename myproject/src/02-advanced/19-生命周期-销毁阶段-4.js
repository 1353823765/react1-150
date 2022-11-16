import React, { Component } from 'react'
export default class One extends Component {
    state={
        isFalse:false
    }
  render() {
    return (
      <div>
         <button onClick={()=>{this.setState({isFalse:!this.state.isFalse})}}>emo</button>
         {this.state.isFalse&&<Two></Two>}
      </div>
    )
  }
}


class Two extends Component {
    componentDidMount(){
          this.sid= setInterval(()=>{console.log("触发了定时器功能")},500) 
    }
    componentWillUnmount(){
        //当组件呗销毁时触发，作用组件被销毁后挂载window的命令还会执行
        //setInterval等一些window的方法还会执行这个时候用生命周期销毁
        console.log("触发了componentWillUnmount销毁生命周期，并且清除定时器")
      clearInterval(this.sid)
      
    }
  
  render() {
    console.log("111")
    return (
      <div>
        SDJAKLDJKLSA
       
      </div>
    )
  }
 
}
