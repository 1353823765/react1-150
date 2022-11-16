import React, { Component } from "react";
export default class One extends Component {
  state = {
    show: true,
  };
  render() {
    return (
      <div>
        <Two>
          <button
            onClick={() => {
              this.setState({ show: !this.state.show });
            }}
          >
            点击
          </button>
        </Two>
        {this.state.show && <APP></APP>}
      </div>
    );
  }
}
class Two extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
class APP extends Component {
  render() {
    return (
      <div>
        <div style={{ background: "yellow", width: "500px", height: "500px" }}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
        </div>
      </div>
    );
  }
}
