import React, { Component } from "react";
import axios from "axios";
export default class Filmname extends Component {
  constructor() {
    super();
    this.state = {
      listname: [],
      copyname: [],
    };
    axios({
      url: "https://m.maizuo.com/gateway?cityId=330100&ticketFlag=1&k=7006874",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16632481542162258335498241"}',
        "X-Host": "mall.film-ticket.cinema.list",
      },
    })
      .then((res) => {
        this.setState({ listname: res.data.data.cinemas });
        this.setState({ copyname: res.data.data.cinemas });
        console.log(res.data.data.cinemas);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <div>
        <input onInput={this.tips}></input>
        {this.state.listname.map((item) => (
          <div className="div1" key={item.cinemas}>
            {item.name}
            <p>{item.address}</p>
          </div>
        ))}
      </div>
    );
  }
  tips = (event) => {
    console.log(event.target.value);
    var newlistname = this.state.copyname.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );
    console.log(newlistname);
    this.setState({ listname: newlistname });
  };
}
