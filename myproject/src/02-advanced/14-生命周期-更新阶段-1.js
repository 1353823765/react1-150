import axios from "axios";
import BScroll from "better-scroll";
import React, { Component } from "react";
export default class One extends Component {
  state = {
    list: [],
    name: "",
  };
  componentDidMount() {
    //
    axios({
      url: "film.json",
      method: "get",
    }).then(
      (res) => (
        console.log(res.data.data.films),
        this.setState({ list: res.data.data.films })
      )
    );
  }
  componentDidUpdate(prevProps, prevState) {
    // componentDidUpdate 每一次更改状态都会执行一次，
    // 不想执行加判断条件
    //自带的2个参数 第一个为老的属性,第2个为老的状态
    //
    console.log(prevState.list);
    if (prevState.list.length === 0) {
      new BScroll(".div");
    }
  }
  render() {
    return (
      <div
        className="div"
        style={{ background: "orange", height: "100px", overflow: "hidden" }}
      >
        <ul>
          {this.state.list.map((item) => (
            <li key={item.filmId}>{item.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
