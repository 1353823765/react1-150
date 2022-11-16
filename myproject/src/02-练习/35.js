import React, { Component } from "react";
export default class One extends Component {
  state = {
    myref: "",
    list: [
      {
        id: 1,
        mytext: "",
        checked: false,
      },
    ],
  };
  render() {
    const newtext = this.state.list.map((item, index) => (
      <li key={item.id}>
        <input
          type={"checkbox"}
          checked={item.checked}
          onChange={() => {
            this.checkedtips(index);
          }}
        ></input>
        <span style={{ textDecoration: item.checked ? "line-through" : "" }}>
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
          type={"text"}
          onChange={(event) => {
            this.setState({ myref: event.target.value });
          }}
          value={this.state.myref}
        ></input>
        <button onClick={this.add}>ADD</button>
        <ul>{(this.state.list.mytext = newtext)}</ul>
      </div>
    );
  }
  add = () => {
    var arr = [...this.state.list];
    arr.push({
      id: Math.random() * 1000000,
      mytext: this.state.myref,
      checked: false,
    });
    this.setState({ list: arr });
  };
  del = (index) => {
    var arr = [...this.state.list];
    arr.splice(index, 1);
    this.setState({ list: arr });
  };
  checkedtips = (index) => {
    var arr = [...this.state.list];
    arr[index].checked = !arr[index].checked;
    this.setState({ checked: arr });
  };
}
