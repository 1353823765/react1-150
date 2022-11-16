import React, { Component } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
export default class One extends Component {
  componentDidMount() {
    //  new Swiper(".swiper")
    new Swiper(".swiper", {
      pagination: {
        el: ".swiper-pagination",
      },
    });
  }
  render() {
    return (
      <div>
        <div className="swiper">
          <div className="swiper-wrapper" style={{textAlign:"center"}}>
          {/* 轮播的内容*/}
          {this.props.children}
          </div>
          {/* 分页导航 */}
          <div className="swiper-pagination"></div>
        </div>  
      </div>
    );
  }
}
