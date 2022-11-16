import React, { Component } from "react";
import axios from "axios";
import "../css/电影院.css";
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      myref: "",
    };
    axios({
      url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
        "X-Host": " mall.film-ticket.cinema.list",
      },
    }).then(
      (res) => (
        console.log(res.data.data.cinemas),
        this.setState({ list: res.data.data.cinemas })
      )
    );
  }
  render() {
    return (
      <div>
        <input
          type={"text"}
          value={this.state.myref}
          onChange={(event) => this.setState({ myref: event.target.value })}
        ></input>
        {this.tips().map((item) => (
          <li key={item.cinemaId}>
            {item.name}
            <p>{item.address}</p>
          </li>
        ))}
      </div>
    );
  }
  tips = () => {
    return this.state.list.filter(
      (item) =>
        item.name.toUpperCase().includes(this.state.myref.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.myref.toUpperCase())
    );
  };
}
