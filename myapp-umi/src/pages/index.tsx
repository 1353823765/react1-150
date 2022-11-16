import React, { Component } from 'react'
import { Redirect } from 'umi'


export default class Index extends Component {
  render() {
    return (
      <div>
        <Redirect to={"/film"}></Redirect>
        
        Index</div>
    )
  }
}
