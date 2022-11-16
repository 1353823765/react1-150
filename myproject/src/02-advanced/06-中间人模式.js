import axios from "axios";
import React, { Component } from "react";
import "../css/02-上映电影.css";
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      name: "",
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
          <Two
            myevent={(text) => {
              // console.log(text);
              this.setState({ name: text });
            }}
            key={item.filmId}
            {...item}
          ></Two>
        ))}
        <Three event={this.state.name}></Three>
      </div>
    );
  }
}
class Two extends Component {
  render() {
    let { synopsis, name, poster,category} = this.props;
    return (
      <div>
        <img
          src={poster}

          onClick={() => {
            this.props.myevent(synopsis);
            // console.log(synopsis)
          }}
          alt={name}
        ></img>
        <h5>
          {name}
         
        </h5>
        <h5>{category}</h5>
      </div>
    );
  }
}
class Three extends Component {
  render() {
    // console.log(this.props.event)
    return (
      <div className="div">
        <span>通过点击子组件获取的内容----》</span>
        {this.props.event}
      </div>
    );
  }
}
