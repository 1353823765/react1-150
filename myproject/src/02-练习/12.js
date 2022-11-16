import React, { Component } from "react";
import Film from "../03-电影院页面/电影";
import MyFilm from "../03-电影院页面/我的";
import Filmname from "./14";
import "../css/电影院.css";
export default class One extends Component {
  state = {
    list: [
      {
        id: 0,
        myname: "电影",
      },
      {
        id: 1,
        myname: "我的",
      },
      {
        id: 2,
        myname: "影院",
      },
    ],
    current: 0,
  };
  render() {
    var newlist = this.state.list.map((item, index) => (
      <li
        key={item.id}
        onClick={() => {
          this.tips(index);
        }}
        className={this.state.current === index ? "active" : ""}
      >
        {item.myname}
      </li>
    ));
    return (
      <div>
      { this.state.current===0&&<Film></Film>}
      {this.state.current===1&&<Filmname></Filmname>}
    { this.state.current===2&& <MyFilm></MyFilm>}
        <ul>{(this.state.list.myname = newlist)}</ul>
      </div>
    );
  }
  tips = (index) => {
    this.setState({ current: index });
  };
}
