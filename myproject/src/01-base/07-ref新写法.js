import React, { Component, createRef } from "react";
import { ReactDOM } from "react-dom";
export default class One extends Component{
     myref=new createRef()
    render(){
        return (
             <div>   
            <input type={"text"} ref={this.myref}></input> 
             <button onClick={this.ctext.bind(this)}>add</button> 
             </div>)    
    }
    ctext()
             {
              console.log("点击获取输入框的值为:",this.myref.current.value)
             }
}