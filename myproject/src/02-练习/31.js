import axios from "axios";
import React, { Component } from "react";
import "../css/02-上映电影.css";
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      str: "",
    };
    axios({
      url: "http://localhost:3000/film.json",
      method: "get",
    }).then(
      (res) => this.setState({ list: res.data.data.films })
      //  console.log(res.data.data.films)
    );
  }
  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <Two
            key={item.filmId}
            {...item}
            myevent={(text) => {
              this.setState({ str: text });
            }}
          ></Two>
        ))}
        <Three myevent={this.state.str}></Three>
      </div>
    );
  }
}
class Two extends Component {
  render() {
    let { name, poster, category } = this.props;
    return (
      <div>
        <img
          src={poster}
          alt={name}
          onClick={() => {
            this.props.myevent(this.props.synopsis);
          }}
        ></img>
        <h3>{name}</h3>
        <h3>{category}</h3>
      </div>
    );
  }
}
class Three extends Component {
  render() {
    var str = this.props.myevent;
    return (
      <div className="div">
        <span>电影简介:</span>
        {str}
      </div>
    );
  }
}
