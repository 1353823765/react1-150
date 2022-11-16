import React, { Component } from "react";
export default class One extends Component {
  state = {
    list: [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
    ],
    current: 0,
  };
  render() {
    return (
      <div>
        <input
          type={"number"}
          onChange={(event) => {
            this.setState({ current: Number(event.target.value) });
          }}
        ></input>
        {this.state.list.map((item, index) => (
          <Two key={item} current={this.state.current} index={index}>
            {item}
          </Two>
        ))}
      </div>
    );
  }
}
class Two extends Component {
  //做性能优化通过shouldComponentUpdate 
  shouldComponentUpdate = (nextProps, nextState) => {
    if (
      this.props.current === this.props.index ||
      nextProps.current === nextProps.index
    ) {
      return true;
    }
    return false;
  };

  render() {
    console.log("被调用了");
    return (
      <div>
        <div
          style={{
            height: "100px",
            width: "100px",
            border: "3px solid red",
            background: this.props.current === this.props.index ? "orange" : "",
            float: "left",
            margin: "10px",
          }}
        >
          {this.props.children}
        </div>
      </div>
    );
  }
}
