import React, { Component, createRef } from "react";
export default class One extends Component {
  username = new createRef();
  pwd = new createRef();
  render() {
    return (
      <div>
        <Two type={"text"} label={"用户名"} ref={this.username}></Two>
        <Two type={"password"} label={"密码"} ref={this.pwd}></Two>
        {console.log(this.username)}
        <button
          onClick={() => {
            console.log(this.username)
            console.log(
              this.username.current.state.text,
              this.pwd.current.state.text
            );
          }}
        >
          提交
        </button>
        <button
          onClick={() => {
          this.username.current.clear();
              this.pwd.current.clear();
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
class Two extends Component {
  state = {
    text: "",
  };
  clear() {
    this.setState({ text: "" });
  }
  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(event) => {
            this.setState({ text: event.target.value });
            //   console.log(event.target.value)
          }}
          value={this.state.text}
        ></input>
      </div>
    );
  }
}
