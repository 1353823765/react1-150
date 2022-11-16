import React, { Component } from 'react'
export default class One extends Component {
    state={
        text:"我是父组件给儿子组件传的值"
    }
  render() {
    return (
      <div>
      <button onClick={()=>{
        this.setState({text:"点击父组件按钮传给子组件更换成现在的状态"})
      }}>父组件</button>
      <Two text={this.state.text}></Two>
      </div>
    )
  }
}
 class Two extends Component {
  render() {
    return (
      <div>
      <button>儿子</button>
      儿子组件-{this.props.text}
      </div>
    )
  }
}

