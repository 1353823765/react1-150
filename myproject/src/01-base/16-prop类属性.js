import React, { Component } from "react";
import Navbar from "./Navbar";
export default class One extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>导航栏</h1>
          <Navbar title="首页"></Navbar>
        </div>
        <div>
          <h1>列表</h1>
          <Navbar showbutton={false} title="列表">
            {" "}
          </Navbar>
        </div>

        <div>
          <h1> 购物车 </h1>
          <Navbar title="购物车"></Navbar>
        </div>
      </div>
    );
  }
}
