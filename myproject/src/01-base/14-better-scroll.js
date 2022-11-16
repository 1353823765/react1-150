import React, { Component } from 'react';
//引入依赖包
 import Better from "better-scroll"
export default class One extends Component {
    state={
        list:[]
    }
  render() {
    var newlist=this.state.list.map((item)=><li key={item} style={{listStyle:'none',textAlign:"center"}}>{item}</li>
        
    )
    return (
      <div>
        <button onClick={this.tips}>点击</button> 
          <div style={{"background":"orange", height:"150px",overflow:"hidden"}} className="div"> 
         <ul>
            {this.state.list=newlist}
          </ul>
          </div>
      </div>
    )
  }
  tips=()=>{
    var  list=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]
    this.setState({list:list},
        ()=>{
            //设置类名要加'.' 设置类名时父元素的类名
        new Better(".div")
    })
  }
}
