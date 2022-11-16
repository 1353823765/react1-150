import axios from "axios";
import React, { Component } from "react";
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      text: "",
    };
    axios({
      url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
        "X-Host": " mall.film-ticket.cinema.list",
      },
    }).then((res) =>
      this.setState(
        { list: res.data.data.cinemas },
        console.log(res.data.data.cinemas)
      )
    );
  }
  render() {
    return (
      <div>
        <input
          value={this.state.text}
          onChange={(event) => {
            this.setState({ text: event.target.value });
          }}
        ></input>
        <ul>
          {this.add().map((item) => (
            <li key={item.cinemaId}>
              {item.name}

              <p>{item.address}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  add() {
    return this.state.list.filter(
      (item) =>
        item.name.toUpperCase().includes(this.state.text.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.text.toUpperCase())
    );
  }
}
