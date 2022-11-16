import axios from "axios";
import React, { Component } from "react";
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      listname: [],
      textname: "",
    };
    axios({
      url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
      method: "get",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
        "X-Host": " mall.film-ticket.cinema.list",
      },
    })
      .then((res) => this.setState({ listname: res.data.data.cinemas }))
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <input
          value={this.state.textname}
          onChange={(event) => {
            this.setState({ textname: event.target.value });
           
          }}
        ></input>
        <ul>
          {this.newName().map((item) => (
            <li key={item.cinemaId}>
              {item.name}
              <p>{item.address}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  newName() {
    return this.state.listname.filter(item=>
        item.name.toUpperCase().includes(this.state.textname)||
        item.address.toUpperCase().includes(this.state.textname)
     
    );
  }
}
// listName() {
//     return this.state.listname.filter(
//       (item) =>
//         item.name.toUpperCase().includes(this.state. textname.toUpperCase()) ||
//         item.address.toUpperCase().includes(this.state. textname.toUpperCase())
//     );
//   }