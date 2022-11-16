import React, { Component } from "react";
import {store } from "../redux/store";
import getListData from "./actiontype/getlistdata";

export default class Filmbox extends Component {

  state = {
    //初始值
    cityname: store.getState().Cityreducer.city,
    citylist: store.getState().Citylistreducer.list,
    text: "",
  };
  componentDidMount() {
    this.setState({
      //设置状态更新状态
      cityname: store.getState().Cityreducer.city,
      citylist: store.getState().Citylistreducer.list,
    });
    // console.log(store.getState().Cityreducer.city);
    // console.log(store.getState().Citylistreducer.list);
    console.log(this.state.citylist);
    if (store.getState().Citylistreducer.list.length === 0) {store.dispatch(getListData());
      //通过数组长度判断是否请求异步ajax数据
      
    } else {
      console.log("缓存数据");
    }
    store.subscribe(() => {
      console.log("订阅电影列表", store.getState().Citylistreducer.list);
    });
    var unsubscribe=store.subscribe(()=>{
       this.setState({ citylist: store.getState().Citylistreducer.list})
    })
    return ()=>{
      unsubscribe()
    }
  }
  render() {
 
    return (
      <div>
        <input
          onChange={(event) =>
            //   console.log(event.target.value),
            {
              this.setState({ text: event.target.value });
              //  console.log(event.target.value)
            }
          }
          value={this.state.text}
        ></input>
        {this.Copyname().map((item) => (
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
  Copyname() {
    return this.state.citylist.filter(
      (item) =>
        item.name.toUpperCase().includes(this.state.text.toUpperCase()) ||
        item.address.toUpperCase().includes(this.state.text.toUpperCase())
    );
  }
}
