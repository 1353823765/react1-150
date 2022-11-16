import React, { Component } from "react";
export default class TWO extends Component {
  render() {
    return (
      <div>
        <input
          onChange={(event) => {
            this.props.myeven(event);
          }}
          value={this.props.even.myref}
        ></input>
        <button onClick={this.props.myadd}>add</button>
        <ul>
          {this.props.even.list.map((item, index) => (
            <li key={item.id}>
              <input
                type={"checkbox"}
                checked={item.checked}
                onChange={() => {
                  this.props.mychecded(index);
                }}
              ></input>
              <span
                style={{ textDecoration: item.checked ? "line-through" : "" }}
              >
                {item.mytext}
              </span>
              <button
                onClick={() => {
                  this.props.mydel(index);
                }}
              >
                del
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
