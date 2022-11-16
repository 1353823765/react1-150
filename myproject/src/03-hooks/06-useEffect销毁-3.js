import React, { Component, useEffect } from "react";
export default class One extends Component {
  state = {
    isFalse: false,
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ isFalse: !this.state.isFalse });
          }}
        >
          emo
        </button>
        {this.state.isFalse && <Two></Two>}
      </div>
    );
  }
}

function Two() {
  useEffect(() => {
    var sid = setInterval(() => {
      console.log("启动计时器");
    }, 500);
    // 清除或者销毁useEffect
    return () => (console.log("清除定时器"), clearInterval(sid));
  }, []);
  return <div></div>;
}
