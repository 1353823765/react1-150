import React, { Component } from "react";
export default class One extends Component {
  state = {
    name: "YIGEHAOREN",
  };
  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(event) => {
            this.setState({ name: event.target.value });
            // console.log(this.state.name)
          }}
        ></input>
        <button
          onClick={() => {
            console.log(this.state.name);
            // this.setState({name:this.state.name})
          }}
        >
          添加
        </button>
        <button
          onClick={() => {
            this.setState({ name: "" });
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
