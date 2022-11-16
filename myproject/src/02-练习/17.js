import React, { Component } from "react";
import axios from "axios";
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      //
      myName: [],
      myText: "",
    };
    axios({
      url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
        "X-Host": " mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      console.log(res);
      this.setState({ myName: res.data.data.cinemas });
    });
  }

  render() {
    return (
      <div>
        <input
          value={this.state.myText}
          onChange={(event) => {
            this.setState({ myText: event.target.value });
          }}
        ></input>
        <ul>
          {this.listName().map((item) => (
            <li key={item.cinemaId}>
              {item.name}
              <p>{item.address}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  listName() {
    return this.state.myName.filter(
      (item) =>
        item.name.toUpperCase().includes(this.state.myText.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.myText.toUpperCase())
    );
  }
}
