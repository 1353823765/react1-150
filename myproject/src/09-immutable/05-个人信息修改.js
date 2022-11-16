import React, { Component } from "react";
import { List, Map } from "immutable";
export default class One extends Component {
  state = {
    info: Map({
      name: "TOM",
      age: 12,
      location: Map({
        province: "辽宁",
        city: "沈阳",
        hobby: List(["篮球", "游泳", "看书"]),
      }),
    }),
  };

  render() {
    console.log(this.state.info);
    return (
      <div>
      <button onClick={()=>{
        this.setState({info:this.state.info.set("name","jarry").set("location",this.state.info.get("location")
        .set("province","浙江"))
        })
      }}>修改</button>
      <br></br>
        姓名: {this.state.info.get("name")}
        <br></br>
        年龄:{this.state.info.get("age")}
        <br></br>
        省份:{this.state.info.get("location").get("province")}
        <br></br>
        城市:{this.state.info.get("location").get("city")}
        <br></br>
        {console.log(this.state.info.get("location").get("hobby"))}
        爱好:
      
          </div>     
           );
  }
}
      
           
         
    
 