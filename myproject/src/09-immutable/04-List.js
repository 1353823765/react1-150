import React, { Component } from 'react'
import {List} from "immutable"
export default class One extends Component {
    state={
       arr:List([1,2,3])
    }
  render() {
    let arr=List([1,2,3])
    let arr1=arr.push(4)
    console.log(arr,arr1)
    return (
      <div>
      {
        this.state.arr.map(item=><li key={item}>{item}</li>)
      }
        
      </div>
    )
  }
}
