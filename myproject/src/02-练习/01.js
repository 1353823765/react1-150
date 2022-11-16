import React, { Component, createRef } from "react";
export default class One extends Component{
    //创建ref对象
      myref=new createRef();
   //状态
    state={
        list:[
             {id:1,
            mytext:""}
        ]
        }
    render(){
    // 创键渲染数组
    var bodylist=this.state.list.map((item)=><li key={item.id}>{item.mytext}</li>)
     return(<div>
           <input type={"text"} ref={this.myref}></input>
           <button onClick={this.tips}>add</button>
           <ul>
           {this.state.mytext=bodylist}
           </ul>
           </div>)
           
    }
    tips=()=>{
        //解构赋值将原数组与现有数组分开改变数组不会影响到原数组
     var arrlist=[...this.state.list];
    //  var arrlist=this.state.list.slice();
     arrlist.push({
         id:Math.random()*100000000,
         mytext:this.myref.current.value
     });
     this.setState({list:arrlist})
        // console.log(this.myref.current.value);
        // console.log(arrlist);
      
    }
}
