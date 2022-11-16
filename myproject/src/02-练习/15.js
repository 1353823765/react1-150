import React, { Component, createRef } from "react";
export default class One extends Component {
  myref = new createRef();
  state = {
    list: [
      {
        id: 0,
        text: "",
      },
    ],
  };
  render() {
    var newlist = this.state.list.map((item, index) => (
      <li key={item.id}>
        {item.text}
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
        <input ref={this.myref}></input>
        <button onClick={this.add}>add</button>
        <ul>{(this.state.list.text = newlist)}</ul>
      </div>
    );
  }
  add = () => {
    var arrlist = [...this.state.list];
    arrlist.push({
      id: Math.random() * 10000000,
      text: this.myref.current.value,
    });
    this.setState({ list: arrlist });
    this.myref.current.value = "";
  };
  del = (index) => {
    var dellist = [...this.state.list];
    dellist.splice(index, 1);
    this.setState({ list: dellist });
  };
}
