import React, { Component } from "react";
import { Map } from "immutable";
export default class One extends Component {
  state = {
    info: Map({
      name: "tom",
      age: 20,
      sex: "男",
      maplist: Map({
        id: 1,
        text: "text111",
      }),
    }),
  };
  render() {
    return (
      <div>
        <button
          onClick={() => {
          this.setState({info:this.state.info.set("name","JARRY")})
          }}
        >
          点击
        </button>
        {this.state.info.get("name")}
        
        <Two twolist={this.state.info.get("maplist")}></Two>
      </div>
    );
  }
}

class Two extends Component {
   shouldComponentUpdate(nextProps,nextState){
      if(this.props.twolist===nextProps.maplist){
        return false
      }else{
        return true
      }
    // console.log(nextState)
   }
  componentDidMount() {
    console.log(this.props.twolist)
    console.log("更新组件状态");
  }
  render() {
    return <div></div>;
  }
}
