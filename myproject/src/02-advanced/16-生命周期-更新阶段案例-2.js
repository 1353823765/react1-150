import React, { Component } from "react";
export default class One extends Component {
  state = {
    list: ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
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
        <div>
          {this.state.list.map(
            (item, index) => (
              console.log(item),
              (
                <Two key={item} current={this.state.current} index={index}>
                  {item}
                </Two>
              )
            )
          )}
        </div>
      </div>
    );
  }
}
class Two extends Component {
  shouldComponentUpdate(newProps) {
    //提升性能，判断更不更新状态
    if (
      this.props.current === this.props.index ||
      newProps.current === newProps.index
    ) {
      return true;
    }
    return false;
  }
  render() {
    {
      console.log(this.props);
    }
    {
      console.log("render");
    }
    return (
      <div
        style={{
          height: "100px",
          width: "100px",
          border: "1px solid red",
          background: this.props.current === this.props.index ? "orange" : "",
          float: "left",
          margin: "10px",
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
