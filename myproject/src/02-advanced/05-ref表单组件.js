import React, { Component, createRef } from "react";
export default class One extends Component {
  username = new createRef();
  pwd = new createRef();
  render() {
    return (
      <div style={{ background: "orange" }}>
        <Two label="用户名" type="text" ref={this.username}></Two>
        <Two label="密码" type="password" ref={this.pwd}></Two>
        <button
          onClick={() => {
            console.log(this.username.current, this.pwd.current.state.text);
          }}
        >
          登入
        </button>
        {console.log(this.state)}
        <button
          onClick={() => {
            console.log(this.pwd.current.clear);
            this.username.current.clear()
            this.pwd.current.clear();
          }}
        >
          取消
        </button>
      </div>
    );
  }
}

class Two extends Component {
  state = {
    text: "",
    pwd: "",
  };
  clear() {
    this.setState({ text: "" ,pwd:""});
  }

  render() {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type={this.props.type}
          onChange={(event) => {
            this.setState({
              text: event.target.value,
              pwd: event.target.value,
            });
          }}
          value={this.state.text} 
        ></input>
      </div>
    );
  }
}
