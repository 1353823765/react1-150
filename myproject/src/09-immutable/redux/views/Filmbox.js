import React, { Component } from "react";
import store from "../redux/store";
import getListData from "./actiontype/getlistdata";
export default class Filmbox extends Component {
  state = {
    //初始值
    cityname: store.getState().Cityreducer.city,
    citylist: store.getState().Citylistreducer.list,
  };
  componentDidMount() {
    this.setState({
      //设置状态更新状态
      cityname: store.getState().Cityreducer.city,
      citylist: store.getState().Citylistreducer.list,
    });
    console.log(store.getState().Cityreducer.city);
    console.log(store.getState().Citylistreducer.list);
    console.log(this.state.citylist);
    if (store.getState().Citylistreducer.list.length === 0) {
      //通过数组长度判断是否请求异步ajax数据
      store.dispatch(getListData());
    } else {
      console.log("缓存数据");
    }
    store.subscribe(() => {
      console.log("订阅电影列表", store.getState().Citylistreducer.list);
    });
  }
  render() {
    return (
      <div >
      <div style={{"overflow":"hidden"}}>
        <div style={{"float":"left"}}
          onClick={() => {
            console.log(this.props);
            console.log(this.state.cityname);
            //  this.setState({cityname:store.getState().city})
            this.props.history.push("/city");
          }} >{this.state.cityname}</div>
       
         <div style={{"float":"right"}} onClick={()=>{
          this.props.history.push("/filmbox/search")
         }}>搜索</div>
         </div>
       
          {

            this.state.citylist.map(item=><li key={item.cinemaId} 
              style={{"listStyle":"none","padding":"10px"}}>{item.name}
              <p style={{"fontSize":"10px"}}>{item.address}</p>
              </li>)
          }
        
        
      </div>
    );
  }
}
