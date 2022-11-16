import React, { Component } from "react";
export default class Tabbar extends Component {
  state = {
    list: [
      {
        id: 0,
        myname: "电影",
      },
      {
        id: 1,
        myname: "影院",
      },
      {
        id: 2,
        myname: "我的",
      },
    ],
    current:0
  };
  render() {
    return <div>
    <ul>
    {this.state.list.map((item, index) => (
      <li
        key={item.id}
        className={this.state.current === index ? "active" : ""}
        onClick={() => {
          this.tips(index);
        }}
      >
        {item.myname}
      </li>
    ))}
  </ul>
    
    </div>;
  }
  tips = (index) => {
    console.log(index);
    this.props.event(index)
    this.setState({ current: index });
  };
}
