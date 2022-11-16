import React, { Component } from "react";
export default class One extends Component {
  render() {
    return <div></div>;
  }
}
var bus = {
  list: [],
  //订阅者
  sub(info) {
    // console.log(info)
    this.list.push(info);
  },
  //发布者
  pub(text) {
    //遍历所有的列表list，将回调函数执行
    console.log(this.list);
    this.list.forEach((info) => info && info(text));
  },
};
bus.sub((text) => {console.log("订阅函数1",text)});
bus.sub(() => {console.log("订阅函数2")});
bus.sub((text) => {  console.log("订阅函数3",text)});
bus.sub(() => { console.log("订阅函数4")});
setTimeout(()=>{
   bus.pub("传递一个参数") 
},0)

 