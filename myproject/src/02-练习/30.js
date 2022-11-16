import React, { Component, createRef } from "react";
export default class One extends Component {
  username = new createRef();
  pwd = new createRef();
  render() {
    return (
      <div>
        {console.log(this.pwd)}
        <Two type={"text"} label={"用户名"} ref={this.username}></Two>
        <Two type={"password"} lab={"密码"} ref={this.pwd}></Two>
        <button
          onClick={() => {
            {
              console.log(
                this.username.current.state.value,
                this.pwd.current.state.value
              );
            }
          }}
        >
          {" "}
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
    value: "",
  };
  clear() {
    this.setState({ value: "" });
  }
  render() {
    return (
      <div>
        <label>{this.props.lable}</label>
        <input
          type={this.props.type}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          value={this.state.value}
        ></input>
      </div>
    );
  }
}
