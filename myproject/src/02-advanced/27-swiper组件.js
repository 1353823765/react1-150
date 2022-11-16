import React, { Component } from "react";
import KSwiper from "./01-swiper组件/swiprer";
import KSwiperItem from "./01-swiper组件/SwiperItem";
import axios from "axios";
export default class One extends Component {
    state={
        list:[],
    }
    componentDidMount(){
       axios({
        url:'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=9911605',
        method:"get",
        headers:{
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16643761542766826522017793","bc":"110100"}'
,'X-Host': 'mall.film-ticket.film.list'
        }
       }).then(res=>this.setState({list:res.data.data.films}))
    }
  render() {
    return (
      <div>
        <KSwiper>
         {
            this.state.list.map(item=><KSwiperItem key={item.filmId} >
                <img src={item.poster} alt={item.name} style={{width:"250px",}}></img>
                </KSwiperItem>
            )
         }
        </KSwiper>
      </div>
    );
  }
}
