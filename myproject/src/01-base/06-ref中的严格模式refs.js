import React, { Component } from "react";
import { ReactDOM } from "react-dom";
export default class Inref extends Component {
  render() {
    return (
      <div>
        <input type={"text"} ref={"mtname"}></input>
        <button
          onClick={() => {
            console.log("click事件输入框显示", this.refs.mtname.value);
          }}
        >
          add
        </button>
      </div>
    );
  }
}
