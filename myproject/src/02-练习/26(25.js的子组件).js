import React, { Component } from "react";
export default class Two extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* console.log(this.props)}
              {console.log(this.props.myevent) */}
          {this.props.event.list.map((item, index) => (
            <li
              key={item.id}
              className={this.props.current === index ? "active" : ""}
              onClick={() => this.tips(index)}
            >
              {item.mytext}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  tips = (index) => {
    console.log(index);
    this.setState({ current: index });
    this.props.myevent(index)
  };
}
