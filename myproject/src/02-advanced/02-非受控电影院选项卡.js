import React, { Component } from "react";
import Tabbar from "./02-电影院页面-非受控组件/Tabbar";
import Film from "./02-电影院页面-非受控组件/电影";
import MyFilm from "./02-电影院页面-非受控组件/我的";
import Filmbox from "./02-电影院页面-非受控组件/影院";
import Navbar from "./02-电影院页面-非受控组件/Navbar";
import "../css/电影院.css";
export default class One extends Component {
  state = {
    
    current: 0,
  };
  render() {
    return (
      <div>
      <Navbar></Navbar>
      <Tabbar event={(index)=>{
        this.setState({current:index})
      }}></Tabbar>
        {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Filmbox></Filmbox>}
        {this.state.current === 2 && <MyFilm></MyFilm>}
      </div>
    );
  }

}
