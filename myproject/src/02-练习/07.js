import React, { Component } from "react";
import "../css/电影院.css";
import Film from "../03-电影院页面/电影";
import MyFilm from "../03-电影院页面/我的";
import Filmbox from "../03-电影院页面/影院";
export default class One extends Component {
  state = {
    list: [
      {
        id: 0,
        mytext: "电影",
      },
      {
        id: 1,
        mytext: "我的",
      },
      {
        id: 2,
        mytext: "影院",
      },
    ],
    current: 0,
  };

  render() {
    var mylist = this.state.list.map((item, index) => (
      <li
        key={item.id}
        className={this.state.current === index ? "active" : ""}
        onClick={() => {
          this.tips(index);
        }}
      >
        {item.mytext}
      </li>
    ));
    return (
      <div>
        {/*this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <MyFilm>2</MyFilm>}
    {this.state.current === 2 && <Filmbox>3</Filmbox>*/}
    {this.widch()}
        <ul>{(this.state.list.mytext = mylist)}</ul>
      </div>
    );
  }
  //点击事件获取index值
  tips = (index) => {
    // console.log(index);
    //更新状态获取index

    this.setState({ current: index });
    // console.log(this.state.current)
  };
  //封装一个函数通过对比this.state.current值与index获取
  widch() {
    switch (this.state.current) {
      case 0:
        return <Film></Film>;
      case 1:
        return <MyFilm></MyFilm>;
      case 2:
        return <Filmbox></Filmbox>;
      default:
        return null;
    }
  }
}
