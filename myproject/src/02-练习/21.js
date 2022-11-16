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
        <span style={{ textDecoration: item.checkbox ? "line-through" : "" }}>
          {item.mytext}
        </span>
        <button
          onClick={() => {
            this.del(index);
          }}
        >
          del
        </button>
      </li>
    ));
    return (
      <div>
        <input
          value={this.state.myref}
          onChange={(event) => {
            this.setState({
              myref: event.target.value,
            });
          }}
        ></input>
        <button
          onClick={() => {
            this.add();
          }}
        >
          add
        </button>
        <ul>{(this.state.list.mytext = newlist)}</ul>
      </div>
    );
  }
  add = () => {
    var arr = [...this.state.list];
    arr.push({
      id: Math.random() * 10000000,
      mytext: this.state.myref,
      checkbox: false,
    });
    this.setState({ list: arr, myref: "" });
    console.log(arr);
  };
  del = (index) => {
    var arr = [...this.state.list];
    arr.splice(index, 1);
    this.setState({ list: arr });
  };
  checkbox = (index) => {
    console.log(index);
    var arr = [...this.state.list];
    console.log(arr);
    arr[index].checkbox = !arr[index].checkbox;
    this.setState({
      checkbox: arr,
    });
  };
}
