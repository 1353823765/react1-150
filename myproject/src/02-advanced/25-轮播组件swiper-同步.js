import React, { Component } from "react";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
export default class One extends Component {
  state = {
    list: ["1", "2", "3"],
  };
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
        <div
          className="swiper"
          style={{ height: "300px", background: "orange" }}
        >
          <div className="swiper-wrapper">
            {this.state.list.map((item) => (
              <div className="swiper-slide" key={item}>
                {item}
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  }
}
