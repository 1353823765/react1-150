import React, { useReducer } from "react";
const reducer = (prevState, actions) => {
  //第一个参数是老的状态这里也就是current=0
  //第2个参数为冲函数组件sendstate中穿过来的参数
  console.log("CHFA", prevState, actions);
  let newstate = { ...prevState };
  console.log(newstate);
  switch (actions.type) {
    case "left":
      newstate.current--;
      return newstate;
    case "right":
      newstate.current++;
      return newstate;
    default:
      return prevState;
  }
};
const instate = {
  //外部的状态
  current: 0,
};
export default function One() {
  //useReducer的第一个参数是管理状态的函数
  //第2个参数是初始的状态值也就是reducer函数和instate他们是独立在外部管理状态
  const [state, sendstate] = useReducer(reducer, instate);
  //state他能获取到外部instate的状态
  //sendstate能是给编状态的方法已调用sendstate会将它里面定义好的对象传给外部的reducer
  return (
    <div>
      {console.log(state)}
      <button
        onClick={() => {
          sendstate({
            type: "left",
          });
        }}
      >
        -
      </button>
      {state.current}
      <button
        onClick={() => {
          sendstate({
            type: "right",
          });
        }}
      >
        +
      </button>
    </div>
  );
}
