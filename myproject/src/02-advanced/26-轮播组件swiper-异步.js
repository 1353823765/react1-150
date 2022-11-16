import React, { Component } from "react";
// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";
// import styles bundle
import "swiper/css/bundle";
export default class One extends Component {
  state = {
    list: [],
  };
  componentDidMount() {
    setTimeout(()=>{
        this.setState({list:[1,2,3,4,5]})
        //第2种方式放在更新状态中后由于我们自知道
        //setstate在异步中是同步执行所以这个setstate之后肯定已经拿到了最新的数据
        new Swiper(
            ".swiper",
            {
              pagination: {
                el: ".swiper-pagination",
              },
            },
            {
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            },
            {
              scrollbar: {
                el: ".swiper-scrollbar",
              },
            }
          )
             
    },1000)
    
  }
  //第一种由于是异步请求如果new Swiper放在componentDidMount中的话
  //会出现数据没回来就执行完事了，拿不到所有的数据所以我们要放在componentDidUpdate中
  
  componentDidUpdate(){
    new Swiper(
        ".swiper",
        {
          pagination: {
            el: ".swiper-pagination",
          },
        },
        {
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
        {
          scrollbar: {
            el: ".swiper-scrollbar",
          },
        }
      )
  }
  render() {
    return (
      <div>
        <div
          className="swiper"
          style={{ height: "200px", background: "orange" }}
        >
          <div className="swiper-wrapper">
            {this.state.list.map((item) => (
              <div key={item} className="swiper-slide">
                {item}
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    );
  }
}
