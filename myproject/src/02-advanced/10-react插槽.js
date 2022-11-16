import React, { Component } from 'react'
export default class One extends Component {
  render() {
    return (
      <div>
        <Two>
        
       <div> yigehaoren0 </div>
       <div> yigehaoren1 </div>
       <div> yigehaoren2 </div>
       <div> yigehaoren3 </div>
       <div> yigehaoren4 </div>
        </Two>
    
      </div>
    )
  }
}
 class Two extends Component {
    //插槽就是通过props的特殊属性children将父组件中的  <Two>yigehaoren</Two>
    //yigehaoren显示出来作用减少父子通信代码减少，为了复用
  render() {
    return (
      <div>
      {this.props.children[0]}
      {this.props.children[1]}
      {this.props.children[2]}
      {this.props.children[3]}
      {this.props.children[4]}
      </div>
    )
  }
}

