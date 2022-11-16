import React, { Component } from 'react'

export default class One extends Component {
    state={
        name:"tom"
    }
    //执行顺序为render --> getSnapshotBeforeUpdate --> componentDidUpdate
    componentDidUpdate(prevProps,prevState,value){
        console.log("我是componentDidUpdate","获取由getSnapshotBeforeUpdate返回值数据"+value)
    }
    getSnapshotBeforeUpdate(){
        //return 返回的数数直接给到后面的componentDidUpdate通过第3个参数value
        console.log("我是 getSnapshotBeforeUpdate")
        return 100;
    }
  render() {
    console.log("我是render")
    return (
      <div>
      <button onClick={()=>{
        this.setState({name:"JATTY"})
      }}>ADD</button>
        {this.state.name}
      </div>
    )
  }
}
