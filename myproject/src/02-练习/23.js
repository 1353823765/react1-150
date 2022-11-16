import React, { Component } from "react";
import TWO from "./24(23.js的子组件）";
export default class One extends Component {
  state = {
    myref: "",
    list: [
      {
        id: 0,
        mytext: "",
        checked: false,
      },
    ],
  };
  render() {
    return (
      <div>
        <TWO
          even={this.state}
          myeven={(event) => {
            this.setState({ myref: event.target.value });
          }}
          myadd={() => {
            this.add();
          }}
          mydel={(index) => {
            this.del(index);
          }}
          mychecded={(index) => {
            this.checked(index);
          }}
        ></TWO>
      </div>
    );
  }
  add = () => {
    var arr = [...this.state.list];
    arr.push({
      id: Math.random() * 10000000,
      mytext: this.state.myref,
      checked: false,
    });
    this.setState({ list: arr, myref: "" });
    console.log(arr);
  };
  del = (index) => {
    var arr = [...this.state.list];
    arr.splice(index, 1);
    this.setState({ list: arr });
  };
  checked = (index) => {
    var arr = [...this.state.list];
    arr[index].checked = !arr[index].checked;
    this.setState({ list: arr });
  };
}
