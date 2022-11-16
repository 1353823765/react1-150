import React, { Component, createRef } from "react";
export default class One extends Component {
  myref = new createRef();
  render() {
    return (
      <div>
        <input type={"text"} ref={this.myref} defaultValue="YIGEHAOREN"></input>
        <button
          onClick={() => {
            console.log(this.myref.current.value);
          }}
        >
          登入
        </button>
        <button
          onClick={() => {
            this.myref.current.value = "";
          }}
        >
          重置
        </button>
      </div>
      //受控组件中如果我们有一个子组件想要获取父组件this.myref.current.value这值是拿不到的
      //这是因为状态没有发生改变也就不能重新执行render(),不能重新执行给子组件设置了也没用没有刷新
      //简单说就是非受控组件在内部使用没有问题，给外部传值无效
    );
  }
}
