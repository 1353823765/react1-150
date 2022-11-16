import React, { Component } from "react";
export default class One extends Component {
  state = {
    myref: "",
    list: [
      {
        id: 1,
        mytext: "",
        checkbox: false,
      },
    ],
  };
  render() {
    var newlist = this.state.list.map((item, index) => (
      <li key={item.id}>
        <input
          type={"checkbox"}
          checked={item.checkbox}
          onChange={() => {
            this.checkbox(index);
          }}
        ></input>
        <span
          style={{
            textDecoration: item.checkbox ? "line-through" : "",
            color: item.checkbox ? "#d9d9d9" : "",
          }}
        >
          {item.mytext}
        </span>
        <button
          onClick={() => {
            this.del(index);
          }}
        >
          DEL
        </button>
      </li>
    ));
    return (
      <div>
        <input
          value={this.state.myref}
          onChange={(event) => {
            this.setState({ myref: event.target.value });
          }}
        ></input>
        <button onClick={this.add}>ADD</button>
        <ul>{(this.state.list.mytext = newlist)}</ul>
      </div>
    );
  }
  //添加todo项
  add = () => {
    var arr = [...this.state.list];
    arr.push({
      //第一种获取唯一的key值用时间戳
      id: new Date().getTime(),
      //第2中用随机数
      // id:Math.random()*100000,
      mytext: this.state.myref,
      checkbox: false,
    });
    this.setState({ list: arr });
  };
  //删除对应的todo项
  del = (index) => {
    var arr = [...this.state.list];
    arr.splice(index, 1);
    this.setState({
      list: arr,
    });
  };
  //选中对应的todo项
  checkbox = (index) => {
    var arr = [...this.state.list];
    arr[index].checkbox = !arr[index].checkbox;
    this.setState({
      checkbox: arr,
    });
  };
}
