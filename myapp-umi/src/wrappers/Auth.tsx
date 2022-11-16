import React, { Component } from 'react'
import { Redirect } from 'umi'

export default class Auth extends Component {
  render() {
    if(localStorage.getItem("token")){
     return (
      <div>
    {this.props.children}

      </div>
    )   
    }else{
      return(
        <Redirect to="/login"></Redirect>
      )
    }
  
  }
}

