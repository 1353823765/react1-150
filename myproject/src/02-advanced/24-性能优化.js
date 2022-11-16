import React, { PureComponent } from "react";
export default class One extends PureComponent {
  state = {
    name: "一个好人",
  };
  componentDidUpdate() {
    console.log("componentDidUpdate()执行了");
  }
  UNSAFE_componentWillUpdate() {
    console.log("UNSAFE_componentWillUpdate()执行了");
  }
//   shouldComponentUpdate(nextProps,nextState){
           //性能优化函数
           // return false为阻止更新状态
           //return true为更新状态
           //写一个逻辑让他更新一次最后后面阻止更新状态
           //有2个参数新的状态nextState和更新后的属性nextProps
        //    if(JSON.stringify(this.state)!==JSON.stringify(nextState)){
            //state和nextState是一个对象我们将它转换为json字符串来进行比较
            //如果不等返回true执行更新
            //否则返回false不更新
        //     return true
        //    }return false

//   }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ name: "一个坏人" });
            //由于点击按钮更新了状态重新执行render()，但是后面在次点击也更新状态但是现在的状态
            //和之前没有变化这样又一次重新执行render(),这样对性能也是一次消耗
            //所以我们要阻止当他状态更新前后一样的这种情况用 shouldComponentUpdate()
          }}
        >
          按钮
        </button>
        --------
        {console.log("render被调用了")}
        {this.state.name}
      </div>
    );
  }
}