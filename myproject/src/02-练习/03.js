import React, { Component, createRef } from "react";
export default class One extends Component {
  myref = new createRef();
  state = {
    list: [
      {
        id: 1,
        mytext: "",
      },
    ],
  };
  render() {
    //  遍历list数组
    var arrlist = this.state.list.map((item) => (
      <li key={item.id}>{item.mytext}</li>
    ));
    return (
      <div>
        <input type={"text"} ref={this.myref}></input>
        <button onClick={this.tips}>add</button>
        <ul>{(this.state.list.mytext = arrlist)}</ul>
      </div>
    );
  }
  tips = () => {
    //创建新数组
    var newlist = [...this.state.list];
    newlist.push({
      id: Math.random() * 100000000,
      mytext: this.myref.current.value,
    });
    //设置新状态改变的状态
    this.setState({ list: newlist });
  };
}
