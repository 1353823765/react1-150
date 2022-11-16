import React, { Component } from "react";
export default class One extends Component {
  state = {
    myref: "",
    list: [
      {
        id: 1,
        mytext: "",
        ischeck: false,
      },
    ],
  };
  render() {
    var newtext = this.state.list.map((item, index) => (
      <li key={item.id}>
        <input
          type={"checkbox"}
          /*  将checkbox改成受控组件，*/
          checked={item.ischeck}
          onChange={() => {
            this.checkbox(index);
          }}
        ></input>
        <span
          style={{
            textDecoration: item.ischeck ? "line-through" : "",
            color: item.ischeck ? "#d9d9d9" : "",
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
        <button onClick={this.add}>add</button>
        <ul>{(this.state.list.mytext = newtext)}</ul>
      </div>
    );
  }
  add = () => {
    var arr = [...this.state.list];
    arr.push({
      id: Math.random() * 100000000,
      mytext: this.state.myref,
      ischeck: false,
    });
    this.setState({ list: arr, myref: "" });
  };
  del = (index) => {
    var arrdel = [...this.state.list];
    arrdel.splice(index, 1);
    this.setState({ list: arrdel });
  };
  checkbox = (index) => {
    console.log(index);
    var checkbox = [...this.state.list];
    checkbox[index].ischeck = !checkbox[index].ischeck;
    this.setState({
      ischeck: checkbox,
    });
    console.log(checkbox[index].ischeck);
  };
}
