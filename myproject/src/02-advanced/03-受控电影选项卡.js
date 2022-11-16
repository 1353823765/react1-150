import React, { Component } from "react";
import "../css/电影院.css";
import Film from "./03-电影院页面-受控组件/电影";
import MyFilm from "./03-电影院页面-受控组件/我的";
import Filmbox from "./03-电影院页面-受控组件/影院";
import Navbar from "./03-电影院页面-受控组件/Navbar";
import Tabbar from "./03-电影院页面-受控组件/Tabbar";
//第一种方式通过通过父组件绑定事件通过子传父实现
//将点击事件的处理函数放在父组件
// export default class One extends Component {
//   state = {
//     list: [
//       {
//         id: 0,
//         mytext: "电影",
//       },
//       {
//         id: 1,
//         mytext: "影院",
//       },
//       {
//         id: 2,
//         mytext: "我的",
//       },
//     ],
//     current: 0,
//   };
//   render() {
//     return (
//       <div>
//         <Navbar></Navbar>
//         <Tabbar event={this.state}
//           mytext={(index)=>this.tips(index)} 

//           ></Tabbar>
//       </div>
//     );
//   }
// tips=(index)=>{
//   this.setState({current:index})
// }
// }
//第2种方式将子组件的点击处理函数写在组件内通过父组件给子组件传状态
export default class One extends Component {
  state = {
    list: [
      {
        id: 0,
        mytext: "电影",
      },
      {
        id: 1,
        mytext: "影院",
      },
      {
        id: 2,
        mytext: "我的",
      },
    ],
    current: 0,
  };
  render() {
    return (
      <div>
        <Navbar event={() => this.setState({ current: 2 })}></Navbar>
        <Tabbar
          event={this.state}
          current={(index) => this.setState({ current: index })}
        ></Tabbar>
        {this.state.current === 0 && <Film></Film>}
        {this.state.current === 1 && <Filmbox></Filmbox>}
        {this.state.current === 2 && <MyFilm></MyFilm>}
      </div>
    );
  }
}
