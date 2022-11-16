
import React, { Component } from "react";

import request from "../utils/request";
export default class Film extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    request(
      "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7493038",
      {
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.list",
        },
      }
    ).then((res) => {
       console.log(res.data.data.films)
      this.setState({
        list: res.data.data.films,
      });
    });
  }
  render() {
    console.log(this.props)
    return (
      <div>
        {this.state.list.map((item, index) => (
          <li key={item.filmId} style={{ listStyle: "none" }}>
            <img
              src={item.poster}
              alt={item.name}
              style={{ height: "200px", listStyle: "none", margin: "10px" }}
              onClick={()=>{
                this.props.history.push(`./dital/${item.filmId}`)
            
              }}
            ></img>
          </li>
        ))}
      </div>
    );
  }
}
