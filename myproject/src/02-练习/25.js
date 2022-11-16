import React, { Component } from "react";
import "../css/电影院.css";
import MyFilm from "../03-电影院页面/我的";
import Filmbox from "../03-电影院页面/影院";
import Film from "../03-电影院页面/电影";
import Two from "./26(25.js的子组件)";
export default class One extends Component {
  state = {
    list: [
      {
        id: 0,
        mytext: "电影",
      },
      {
        id: 1,
        mytext: "影院",
      },
      {
        id: 2,
        mytext: "我的",
      },
    ],
    current: 0,
  };
  render() {
    return (
      <div>
     <Two event={this.state}  myevent={(index)=>{this.setState({ current: index })} 
    } current={this.state.current}></Two>
        {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Filmbox></Filmbox>}
        {this.state.current === 2 && <MyFilm></MyFilm>}
      </div>
    );
  }
  // tips = (index) => {
  //    console.log(index);
  //   this.setState({ current: index });
  // };
}
