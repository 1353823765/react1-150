import React, { Component } from 'react'

export default class Caysoon extends Component {
  state={
      list:[]
  }
  componentDidMount(){
    fetch(
     ' /api/mmdb/movie/v3/list/hot.json?ct=%E7%A7%A6%E7%9A%87%E5%B2%9B&ci=122&channelId=4'
    ).then(res=>res.json()).then(res=>console.log(res))
  }
  render() {
    return (
      <div>
        Caysoon
      </div>
    )
  }
}
