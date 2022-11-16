import React, { Component } from "react";
import ReactDom from "react-dom";
export default class Cood extends Component {
  a = 100;
  render() {
    return (
      <div>
        <input />
        <button
          onClick={() => {
            console.log(this.a);
          }}
        >
          add1
        </button>
        <button onClick={this.add2Button.bind(this)}>add2</button>
        <button
          onClick={() => {
            this.add3Button();
          }}
        >
          add3
        </button>
        <button onClick={this.add4Button}>add4</button>
      </div>
    );
  }
  //普通函数普 通函数如果想要触发需要用bind(this)改变this指向
  add2Button() {
    console.log(this.a);
  }
  add3Button = () => {
    console.log(this.a);
  };
  add4Button = () => {
    console.log(this.a);
  };
}
