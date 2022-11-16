import React, { Component } from "react";
import axios from "axios";
import "../css/02-上映电影.css";
var bus={
    list:[],
    sub(fn){
           this.list.push(fn)
    },
    pub(text){
        this.list.forEach((fn)=>fn&&fn(text))
    }
}
export default class One extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    axios({
      method: "get",
      url: "film.json",
    }).then(
      (res) => (
        console.log(res.data.data.films),
        this.setState({ list: res.data.data.films })
      )
    );
  }
  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <Two key={item.filmId} {...item}></Two>
        ))}
        <Three></Three>
      </div>
    );
  }
}
class Two extends Component {
  render() {
    var { category, name, synopsis, poster } = this.props;
    return (
      <div>
        <img
          src={poster}
          alt={name}
          onClick={() => {
            bus.pub(synopsis)
          }}
        ></img>
        <h4>{name}</h4>
        <h3>{category}</h3>
      </div>
    );
  }
}
class Three extends Component {
    state={
        text:""
    }
    
  render() {
    return (
      <div className="div">
        <span>电影简介=</span>
        {bus.sub((text)=>{this.setState({text:text})})}
        {this.state.text}
        </div>
    );
  }
}
