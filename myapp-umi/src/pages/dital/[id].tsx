import React, { Component } from 'react'

export default class Dital extends Component {
  
  render() {
    console.log(this.props.match.params)
    return (
      <div>Dital</div>
    )
  }
}
