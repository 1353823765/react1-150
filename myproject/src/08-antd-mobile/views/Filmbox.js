import React, { Component } from "react";
import { connect } from "react-redux";
// import store from "../redux/store";
import { NavBar } from "antd-mobile";
import { SearchOutline } from "antd-mobile-icons";
import getListData from "./actiontype/getlistdata";
class Filmbox extends Component {
  // state = {
  //   //初始值
  //   cityname: this.props.Cityreducer.city,
  //   citylist: this.props.Citylistreducer.list,
  // };
  componentDidMount() {
    // this.setState({
    //   //设置状态更新状态
    //   cityname: store.getState().Cityreducer.city,
    //   citylist: store.getState().Citylistreducer.list,
    // });
    // console.log(store.getState().Cityreducer.city);
    // console.log(store.getState().Citylistreducer.list);
    // console.log(this.state.citylist);
    if (this.props.citylist.length === 0) {
      //通过数组长度判断是否请求异步ajax数据
      // store.dispatch(getListData());、
      this.props.getListData();
    } else {
      console.log("缓存数据");
    }
    // store.subscribe(() => {
    //   console.log("订阅电影列表", store.getState().Citylistreducer.list);
    // });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <div style={{ overflow: "hidden" }}>
          <NavBar
            right={
              <SearchOutline
                onClick={() => {
                  this.props.history.push("/filmbox/search");
                }}
              />
            }
            left={
              <div
                onClick={() => {
                  console.log(this.props);
                  console.log(this.props.cityname);
                  //  this.setState({cityname:store.getState().city})
                  this.props.history.push("/city");
                }}
              >
                {this.props.cityname}
              </div>
            }
            back={null}
          >
            影院
          </NavBar>
          {/*  <div style={{ float: "left" }}
         
          onClick={() => {
            console.log(this.props);
            console.log(this.props.cityname);
            //  this.setState({cityname:store.getState().city})
            this.props.history.push("/city");
          }}
        >
            {this.props.cityname}
         
          </div> */}

          {/*  <div
            style={{ float: "right" }}
            onClick={() => {
              this.props.history.push("/filmbox/search");
            }}
          >
            搜索
          </div> */}
        </div>

        {this.props.citylist.map((item) => (
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
const mapState = (state) => {
  console.log(state);
  return {
    cityname: state.Cityreducer.city,
    citylist: state.Citylistreducer.list,
  };
};
const mapdis = {
  getListData,
};
export default connect(mapState, mapdis)(Filmbox);
