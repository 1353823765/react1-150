import React, { Component } from "react";
import axios from "axios";
import "../css/02-上映电影.css";
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      //list为存取请求回来的数据
      list: [],
      //name为存储Two组件传给One的数据
      name: "",
    };
    axios({
      method: "get",
      url: "/film.json",
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
            key={item.filmId}
            {...item}
            myevent={(text) => {
              this.setState({ name: text });
            }}
          ></Two>
        ))}
        <Three>{this.state.name}</Three>
      </div>
    );
  }
}
class Two extends Component {
  render() {
    const { name, poster, category, synopsis } = this.props;
    return (
      <div>
        <img
          src={poster}
          alt={name}
          onClick={() => {
            this.props.myevent(synopsis);
          }}
        ></img>
        <h3>{name}</h3>
        <h4>{category}</h4>
      </div>
    );
  }
}
class Three extends Component {
  render() {
    return <div className="div">{this.props.children}</div>;
  }
}
