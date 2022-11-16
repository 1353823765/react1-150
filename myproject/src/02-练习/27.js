import React, { Component } from "react";
export default class One extends Component {
  state = {
    username: "",
    pwd: "",
  };
  render() {
    return (
      <div style={{ background: "orange" }}>
        <Two
          type={"text"}
          label={"用户名"}
          even={this.state.username}
          myevent={(text) => {
            this.setState({ username: text });
          }}
        ></Two>
        <Two
          type={"password"}
          label={"密码"}
          even={this.state.pwd}
          myevent={(text) => {
            this.setState({ pwd: text });
          }}
        ></Two>
        <button
          onClick={() => {
            console.log(
              "用户名:",
              this.state.username,
              "密码:",
              this.state.pwd
            );
            //    console.log(this.state.pwd)
          }}
        >
          登入
        </button>
        <button
          onClick={() => {
            this.setState({ username: "", pwd: "" });
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
class Two extends Component {
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(event) => {
            this.props.myevent(event.target.value);
          }}
          value={this.props.even}
        ></input>
      </div>
    );
  }
}
