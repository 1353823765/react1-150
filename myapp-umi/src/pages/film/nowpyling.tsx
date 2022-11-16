

import React, { Component } from 'react'

export default class Nowpyling extends Component {
    state={
      list:[]
    }
  componentDidMount(){
    fetch( "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7493038",
    {
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then(res=>res.json()).then(res=>{console.log(res.data.films),
    this.setState({list:res.data.films})
    })
  
   
      
      
  }
  render() {
  console.log(this.props)
  
  console.log(this.state.list)
    return (
      
      <div>
        {
          this.state.list.map((item)=>
             <li key={item.filmId} onClick={()=>{
              this.props.history.push(`/dital/${item.filmId}`)
             }}>{item.name}</li>)
        }
      </div>
    )
  }
}
