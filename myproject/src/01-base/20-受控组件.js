import React, { Component } from "react";
export default class One extends Component {
    //设置输入框的默认值
    //之后更改状态来取修改输入框的值
    //https://juejin.cn/post/6844903629493633038 受控组件与非受控组件区别
  state = {
    username: "YIGEHAOREN",
  };
  render() {
    return (
      <div>
        <input
          type={"text"}
          /*{ 设置输入框默认值 }*/
          value={this.state.username}
          onChange={(event) => {
            {/* 这里用onChange事件来代替onInput
           因为在react中的onChange事件与原生的有区别
          原生js 中的 onchange是在失去焦点且失去焦点时的value与获得焦点时的value不一致
         （输入内容有变化）的时候才会被调用。原生的onchange当失去焦点时才会去判断input内的值。
        react中的onChange在用户持续输入的时候触发，不在失去获取或者失去焦点的时候触发*/}
            this.setState({ username: event.target.value });
            {/* 通过event.target.value 获取输入框的内容来更新状态 */}
          }}
        ></input>
        <button
          onClick={() => {
            console.log(this.state.username);
          }}
        >
          登入
        </button>
        <button
          onClick={() => {
            this.setState({ username: "" });
          }}
        >
          重置
        </button>
      </div>
    );
  }
}
