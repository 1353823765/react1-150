//todolist简单的功能 添加删除
import React, { Component, createRef } from "react";
export default class One extends Component {
  myref = new createRef();
  state = {
    list: [{ id: 1, mytext: "" }],
  };
  render() {
    //遍历数组
    var newtext = this.state.list.map((item, index) => (
           <li key={item.id}>
        {item.mytext}
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
        <button onClick={this.tips}>add</button>
        <ul>{(this.state.list.mytext = newtext)}</ul>
      </div>
    );
  }
  //添加数据输出
  tips = () => {
    //新创建数组
    var newlist = [...this.state.list];
    //新数组中添加数据
    newlist.push({
      id: Math.random() * 10000000,
      mytext: this.myref.current.value,
    });
    //更新状态覆盖之前的状态
    this.setState({ list: newlist });
  };
  //删除指定的数据
  deltips(index) {
    //新创建一个数组
    var dellist = [...this.state.list];
    dellist.splice(index, 1);
    //设置状态
    this.setState({ list: dellist });
  }
}
