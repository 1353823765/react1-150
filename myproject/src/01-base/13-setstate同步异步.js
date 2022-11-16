import React, { Component } from 'react'
export default class One extends Component {
     state={
         number:1
     }
  render() {
    return (
      <div>
       <button onClick={this.addC1}>ADD1</button>
       <button onClick={this.addC2}>ADD2</button>
      </div>
    )
  }
    addC1=()=>{
       this.setState({number:this.state.number+1})
       console.log(this.state.number)
       //打印的是1 因为这个是更新之前的状态起始状态值就是1
       //应为setState在同步中是异步更新,异步更新不会阻塞后面的代码
    //    this.setState({number:this.state.number+1})
    //    console.log(this.state.number)
    //    this.setState({number:this.state.number+1})
    //    console.log(this.state.number)
    }
    addC2=()=>{
        setTimeout(()=>{
            this.setState({number:this.state.number+1})
            console.log(this.state.number)
            //打印的值为3因为他更新的是最新的状态起始状态就是2,当点击事件触发后状态更新为3 
            //是因为setState在异步逻辑中为同步更新，从上到下依次执行，
        })
    }
}
