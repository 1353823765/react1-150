import React, { Component } from "react";
export default class One extends Component {
  state = {
    username: localStorage.getItem("username"),
    pwd: "",
  };
  render() {
    return (
      <div style={{ background: "yellow" }}>
        <Two
          even="用户名"
          type="text"
          text={this.state.username}
          mytext={(text) => {
            this.setState({ username: text });
            // console.log("用户名", text);
          }}
        ></Two>
        <Two
          even="密码"
          type="password"
          mytext={(text) => {
            this.setState({ pwd: text });
          }}
        ></Two>
        <button
          onClick={() =>
            console.log(`用户名:${this.state.username},密码:${this.state.pwd}`)
          }
        >
          登入
        </button>
        <button
          onClick={() => {
            this.setState({ username: "", pwd: "" });
          }}
        >
          取消
        </button>
      </div>
    );
  }
}
class Two extends Component {
  render() {
    console.log(this.props);
    // console.log(this.props.handle)
    return (
      <div>
        <label>{this.props.even} </label>
        <input
          value={this.props.text}
          type={this.props.type}
          onChange={
            (event) => {
              this.props.mytext(event.target.value);
            }
            //通过回调函数将mytext() 将event.targht.value当作形参传到父组件
          }
        ></input>
      </div>
    );
  }
}
