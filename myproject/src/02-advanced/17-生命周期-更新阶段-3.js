import React, { Component } from "react";

export default class One extends Component {
  state = {
    name: "yigehaoren",
  };
  render() {
    return (
      <div>
        {this.state.name}
        <button
          onClick={() => {
            this.setState({ name: "YIGEHAOREN" });
          }}
        >
          ANA
        </button>
        <Two text={this.state.name}></Two>
      </div>
    );
  }
}

class Two extends Component {
  state = {
    little: "1111",
  };
  componentWillReceiveProps(nextProps) {
    //nextProps参数可以获取父组件最新的状态，父组件不触发重新render不会触发
    console.log("父组件修改状态");
    console.log(nextProps);
    this.setState({ little: "1231" + nextProps.text });
  }
  render() {
    return <div>{this.state.little}</div>;
  }
}
