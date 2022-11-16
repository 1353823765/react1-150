import React, { Component } from "react";
import "../css/电影院.css";
import Filmbox from "../03-电影院页面/影院";
import MyFilm from "../03-电影院页面/我的";
import Film from "../03-电影院页面/电影";
export default class One extends Component {
  state = {
    list: [
      {
        id: 0,
        name: "电影",
      },
      {
        id: 1,
        name: "影院",
      },
      {
        id: 2,
        name: "我的",
      },
    ],
    current: 0,
  };
  render() {
    var newlist = this.state.list.map((item, index) => (
      <li
        key={item.id}
        //当点击的时候index会知道我们点了哪一个按钮
        //通过index改变状态中的current这样当点击的时候current与index相等
        className={index === this.state.current ? "active" : ""}
        onClick={() => {
          this.setState({ current: index });
          console.log(index);
        }}
      >
        {item.name}
      </li>
    ));
    return (
      <div>
        <ul>{(this.state.list.name = newlist)}</ul>
        {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Filmbox></Filmbox>}
        {this.state.current === 2 && <MyFilm></MyFilm>}
      </div>
    );
  }
}
