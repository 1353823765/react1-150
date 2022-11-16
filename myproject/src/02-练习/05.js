import React, { Component, createRef } from "react";
export default class One extends Component {
  myref = new createRef();
  state = {
    list: [
      {
        id: 1,
        mydata: "",
      },
    ],
  };
  render() {
    var newlist = this.state.list.map((item, index) => (
      <li key={item.id}>
        {/* item.mydata */}
        {
        <span dangerouslySetInnerHTML={
            {
                __html:item.mydata
            }
        }></span>
     
        }
      
        <button
          onClick={() => {
            this.deltips(index);
          }}
        >
          DEL
        </button>  
      </li>
    ));
    return (
      <div>
        <input type={"text"} ref={this.myref}></input>
        <button onClick={this.addtips}>add</button>
        <ul>{(this.state.list.mydata = newlist)}</ul>
      {/*this.state.list.length===0?<div>待处理事件</div>:null 
       用条件判断来显示隐藏div，数组的长度为0时，显示div
      */}
      {this.state.list.length===0&&<div>待处理事件</div>
        /* 用&&也可以实现显示div的功能，&&前面的值为true才执行后面的语句否者不执行 */
      }
    
      </div>
    );
  }
  //添加todo
  addtips = () => {
    var arrlist = [...this.state.list];
    arrlist.push({
      id: Math.random() * 1000000,
      mydata: this.myref.current.value,
    });
    this.setState({ list: arrlist });
    //触发事件之后清空文本框内输入的内容
    this.myref.current.value="";
  };
  //删除todo
  deltips(index) {
    var dellist = [...this.state.list];
    dellist.splice(index, 1);
    this.setState({ list: dellist });
    console.log(index);
  }
}
