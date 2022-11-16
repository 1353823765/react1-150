import React, { Component } from "react";
export default class One extends Component {
  state = {
    username: "",
    pwd: "",
  };
  render() {
    return (
      <div style={{ background: "yellow" }}>
        <Two
          event={this.state.username}
          type={"text"}
          label={"用户名"}
          myevent={(text) => {
            this.setState({ username: text });
          }}
        ></Two>
        <Two
          event={this.state.pwd}
          type={"password"}
          label={"密码"}
          myevent={(text) => {
            this.setState({ pwd: text });
          }}
        ></Two>
        <button
          onClick={() => {
            console.log(this.state.username, this.state.pwd);
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
          value={this.props.event}
        ></input>
      </div>
    );
  }
}
