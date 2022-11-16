import React, { Component } from 'react'
export default class Navbar extends Component {
  render() {
    return (
      <div style={{"background":"yellow", "textAlign":"center",overflow:"hidden"} }>
        <button style={{"float":"left"}}>返回</button>
        <span>卖座电影</span>
        <button style={{"float":"right  "}}>我的</button>
        
      </div>
    )
  }
}
