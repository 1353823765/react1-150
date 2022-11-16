import React, { Component } from 'react'
import BScroll from 'better-scroll'
export default class One extends Component {
    state={
        list:["000","111","222","333","444","555","666","777","888","999"]
    }
    componentDidMount(){
        // componentDidMount 为Dom全部创建之后
        //常用在一些原生的js库，都是在dom创建完毕之后进行的操作
         new BScroll("#div")
    }
  render() {
    return (
      <div id='div' style={{"background":"yellow","height":"120px","width":"300px",
      "overflow":"hidden"}}>
         <ul>
         {
            this.state.list.map((item)=><li key={item}>{item}</li>)
         }
         </ul>
      </div>
    )
  }
}
