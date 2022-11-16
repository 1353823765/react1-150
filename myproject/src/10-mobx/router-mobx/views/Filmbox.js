import { autorun } from "mobx";
import React, { Component } from "react";
import stroe from "../mobx/stroe";
import { inject, observer } from "mobx-react";
@inject("stroe")
//observer帮你监听如果数据更新会重新更新
@observer
export default class Filmbox extends Component {
  // state = {
  //   citylist: [],
  // };
  componentDidMount() {
    console.log(stroe.list.length);
    console.log(this.props);
    if (stroe.list.length === 0) {
      stroe.getListData();
    }
    // //监听list的改变
    // let unscript = autorun(() => {
    //   console.log(stroe.list);
    //   this.setState({ citylist: stroe.list });
    // });
    // return () => {
    //   unscript();
    // };
  }
  render() {
    return (
      <div>
        {stroe.list.map((item) => (
          <li
            key={item.cinemaId}
            style={{ listStyle: "none", padding: "10px" }}
          >
            {item.name}
            <p style={{ fontSize: "10px" }}>{item.address}</p>
          </li>
        ))}
      </div>
    );
  }
}
