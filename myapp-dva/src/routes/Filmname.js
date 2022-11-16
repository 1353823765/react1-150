import { withRouter } from 'dva/router'
import React, { Component } from 'react'

export default class Filmname extends Component {
  render() {
    return (
      <div>
     <button onClick={()=>{
      localStorage.setItem("token","value")
     }}>登入</button>
      </div>
    )
  }
}


