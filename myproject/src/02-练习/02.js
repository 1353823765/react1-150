import React, { Component, createRef } from "react";
export default class One extends Component{
      myref=new createRef();
       state={
           list:[{
              id:1,
              mytext:""
           }]
       }
      
    render(){
      var     arrtext=this.state.list.map(item=><li key={item.id}>{item.mytext}</li>)
        return( <div> 
                <input type={"text"} ref={this.myref}></input>
                <button onClick={this.tips} > add</button>
                <ul>
                 {this.state.list.mytext=arrtext}
                 </ul>
              </div>) 
           
    }
    tips=()=>{
        var arrlist=[...this.state.list];
      arrlist.push({ id:Math.random()*100000000,
        mytext:this.myref.current.value});
      this.setState({
         list:arrlist
      })
        
    }
}