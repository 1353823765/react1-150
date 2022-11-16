import React, { Component, createRef } from "react";

export default class One extends Component {
  state = {
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  };
  getSnapshotBeforeUpdate() {
    {
      console.log(this.myref.current.scrollHeight);
    }
    return this.myref.current.scrollHeight
  }
  componentDidUpdate(pP,pS,value){
    //点击按钮更新后的位置
   console.log(this.myref.current.scrollHeight)
   //老的状态显示的位置由getSnapshotBeforeUpdate传过来的
   this.myref.current.scrollTop= this.myref.current.scrollTop+(this.myref.current.scrollHeight-value)
     console.log(value)
  }
  myref = new createRef();
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              list: [
                ...[11, 12, 13, 14, 15, 16, 17, 18, 19,20,21],
                ...this.state.list,
              ],
            });
          }}
        >
          点击
        </button>
        <div
          style={{ background: "orange", height: "200px", overflow: "auto" }}
          ref={this.myref}
        >
          <ul>
            {this.state.list.map((item) => (
              <li key={item} style={{ margin: "100px" }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
