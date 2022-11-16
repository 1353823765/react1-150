import React, { Component } from 'react'
export default class Datil extends Component {
    componentDidMount(){
        console.log("通过this.props.history获取myid值",this.props.match.params.myid        )

    }
  render() {
    return (
      <div>
        datil
      </div>
    )
  }
}

