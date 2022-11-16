import React, { Component } from "react";
import "../css/电影院.css";
import Filmbox from "../03-电影院页面/影院";
import MyFilm from "../03-电影院页面/我的";
import Film from "../03-电影院页面/电影";
export default class One extends Component {
  state={
     list:[{
      id:0,
      mytext:"电影"
     },{
      id:1,
      mytext:"影院"
     },{
      id:2,
      mytext:"我的"
     }],current:0
  }
  render() {
    var newlist=this.state.list.map((item,index)=><li key={item.id} 
      className={this.state.current===index?"active":""}
      onClick={()=>{
        //点击的时候改变状态
        this.setState({current:index})
        console.log(index)
    }}>{item.mytext}</li> 
     )
    return (
      <div>
      {this.state.current===0&&<Film></Film>}
    {this.state.current===1&&<Filmbox></Filmbox>}
    {this.state.current===2&&<MyFilm></MyFilm>}
      <ul>
         {this.state.list.mytext=newlist}
         </ul>
      </div>
    )
  }
}
