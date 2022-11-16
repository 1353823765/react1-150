import React, { Component } from "react";
import axios from "axios";
import "../css/02-上映电影.css";
var bus = {
  list: [],
  sub(fn) {
    this.list.push(fn);
  },
  pub(text) {
    this.list.forEach((fn) => {
      fn && fn(text);
    });
  },
};  
export default class One extends Component {
  state = {
    checked: false,
    checkedtwo: false,
    type: 0,
  };
  render() {
    return (
      <div>
        <input
          type={"checkbox"}
          checked={this.state.checked}
          onChange={() => {
            this.setState({
              checked: !this.state.checked,
              checkedtwo: false,
              type: 0,
            });
          }}
        ></input>
        正在热映
        <input
          type={"checkbox"}
          onChange={() => {
            this.setState({
              checkedtwo: !this.state.checkedtwo,
              checked: false,
              type: 1,
            });
          }}
          checked={this.state.checkedtwo}
        ></input>
        即将上映
        <Two myevent={this.state}></Two>
      </div>
    );
  }
}
class Two extends Component {
  state = {
    info: [],
  };
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   // console.log(nextProps.myevent.type);
  //   if (nextProps.myevent.type === 0) {
  //     axios({
  //       url: " https://m.maizuo.com/gateway?cityId=140500&pageNum=1&pageSize=10&type=1&k=1827221",
  //       method: "get",
  //       headers: {
  //         "X-Client-Info":
  //           '{"a":"3000","ch":"1002","v":"5.2.1","e":"16643761542766826522017793"}',
  //         "X-Host": "mall.film-ticket.film.list",
  //       },
  //     }).then((res) =>
  //       // console.log(res.data.data.films),
  //       this.setState({ info: res.data.data.films })
  //     );
  //   } else {
  //     axios({
  //       url: "film.json",
  //       method: "get",
  //     }).then((res) => {
  //       this.setState({ info: res.data.data.films });
  //     });
  //   }
  // }
  static getDerivedStateFromProps(nextProps){
     console.log("getDerivedStateFromProps",nextProps)
     return{
      //设置最后一次更新的状态
       type:nextProps.myevent.type

     } 
  }
 
componentDidUpdate(prevProps,prevState){
   console.log(this.props)
  console.log("老属性",prevProps)
   console.log("老状态", prevState)
  //  console.log(typeof this.props.myrevet.props)
  if(this.props.myevent.type ===prevState.type){
    //判断老状态和新状态的值一样就return出去不在执行axios
    return
  }
 
  if (prevState.type   === 0) {
        axios({
          url: " https://m.maizuo.com/gateway?cityId=140500&pageNum=1&pageSize=10&type=1&k=1827221",
          method: "get",
          headers: {
            "X-Client-Info":
              '{"a":"3000","ch":"1002","v":"5.2.1","e":"16643761542766826522017793"}',
            "X-Host": "mall.film-ticket.film.list",
          },
        }).then((res) =>(
          console.log(res.data.data.films),
          this.setState({ info: res.data.data.films }))
        );
      } else {
        axios({
          url: "film.json",
          method: "get",
        }).then((res) => (console.log(res.data.data.films),
          this.setState({ info: res.data.data.films }))
        );
      }
   
}
  render() {

    
    return (
      <div>
        {this.state.info.map((item) => (
          <Three key={item.filmId} {...item}></Three>
        ))}
        <Four></Four>
      </div>
    );
  }
}
//展示组件
class Three extends Component {
  render() {
    var { name, poster, synopsis, category } = this.props;
    return (
      <div>
        <img
          src={poster}
          alt={name}
          onClick={() => {
            bus.pub(synopsis);
          }}
        ></img>
        <h3>{name}</h3>
        <h3>{category}</h3>
      </div>
    );
  }
}
class Four extends Component {
  state = {
    info: "",
  };
  render() {
    bus.sub((text) => this.setState({ info: text }));
    return (
      <div className="div" style={{ left: "500px" }}>
        <span>电影简介---</span>
        {this.state.info}
      </div>
    );
  }
}