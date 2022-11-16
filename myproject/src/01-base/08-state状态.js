import React, { Component, createRef } from "react";
import { ReactDOM } from "react-dom";
export default class One extends Component{
   //创建ref对象
   myref=new createRef()
   //添加状态这里是固定格式用 state;
   //第一种写法状态写法
   // state={
   //    mystate:true
   // }
   //第二种写法用 es6的constructor()来实现
   constructor(){
      //super()为继承Component属性相当于es5中的call()继承属性
      super();
      this.state={
         like:"React",
         mystate:true
      }
      
   }
   
      render(){
         return <div>
                <input type={"text"} ref={this.myref}></input>
                
                <button onClick={()=>{
                 
                  //设置状态必须用setState方法
                  //设置状态当点击事件触发使得mystate的值与state的值相反
                  this.setState({mystate:!this.state.mystate,
                                       like:"Vue"}
                                 )
                  //this.myref.current.value 为通过对象的current中的value的方法获取点击时文本框的内容
                  console.log(this.myref.current.value);
                  //this.state.mystate?"点击收藏":"取消收藏"条件表达式来代替if else
                  //mystate状态为true是点击收藏,状态为false是取消收藏;
                  if(this.state.mystate){
                     console.log("获取输入框的文字:",this.myref.current.value);
                  }else{
                     console.log("取消输入框的文字:",this.myref.current.value)
                  }
                  
                }}>{this.state.mystate?"点击收藏":"取消收藏"}</button>
                <h1>欢迎学习{this.state.like}</h1>
      
                </div>
      }
     
}