import axios from "axios";
import React, { Component } from "react";
import "../css/02-上映电影.css";
var bus = {
  list: [],
  sub(fn) {
    this.list.push(fn);
  },
  pub(info) {
    this.list.forEach((fn) =>fn&& fn(info));
  },
};
bus.sub(() => {console.log("SADA111")});
bus.sub((info) => {console.log("SADA111",info)});

bus.pub("SDA");

export default class One extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    axios({
      url: "http://localhost:3000/film.json",
      methods: "get",
    }).then((res) =>
      // console.log(res.data.data.films),
      this.setState({ list: res.data.data.films })
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
    let { synopsis, name, poster, category } = this.props;
    return (
      <div>
        <img src={poster} onClick={() => {
          bus.pub(synopsis)

        }} alt={name}></img>
        <h5>{name}</h5>
        <h5>{category}</h5>
      </div>
    );
  }
}
class Three extends Component {
      state={
        value:""
      }
  render() {
    // console.log(this.props.event)
    return (
      <div className="div">
      {bus.sub((info)=>this.setState({value:info}))}
        <span>简介====</span> {this.state.value}
      </div>
    );
  }
}
