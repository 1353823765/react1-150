import React,{Component} from "react";
export default class App extends Component{
    render(){
        //{}中的代码会被当做js代码进行处理
        let obj={
             width:"100px",
             height:"100px" ,
            backgroundColor:"red",
            border:"orange"
        }
        return<div style={obj}>
         20+50={20+50},
         20&gt;50 {20>50?"true":"false"}
          </div>
    }
}
