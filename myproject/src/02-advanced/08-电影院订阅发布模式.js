import React, { Component } from 'react'
import axios from "axios"
import "../css/02-上映电影.css"
var bus={
    //通过list数组将，订阅的回调函数存储在list里面
    list:[],
 //订阅
 sub(callback){
   console.log(callback) 
   this.list.push(callback)
 },
 //发布
 pub(text){
    this.list.forEach((callback)=>
     callback&& callback(text)  )
 }
}


export default class One extends Component {
    constructor(){
        super();
        this.state={
            list:[]
        }
        axios({
            url:"/film.json",
            method:"get",
        }).then(res=>(console.log(res.data.data.films),
             this.setState({list:res.data.data.films})         
           ))
    }
  render() {
    return (
      <div>
        {
            this.state.list.map((item)=><Two key={item.filmId}
            {...item}
          
            ></Two>)
        }
        <Three></Three>
      </div>
    )
  }
}


class Two extends Component {

  render() {

    let {name,poster,synopsis,category}=this.props
    return (
      <div>
    
      <img src={poster} alt={name} onClick={()=>{
        bus.pub(synopsis)
      }}></img>
      <h5>{name}</h5>
      <h5>{category} </h5>
      </div>
      
    )
  }}


 class Three extends Component {
    constructor(){
        super();
        this.state={
            list:""
        }
        bus.sub((text)=>{
             this.setState({list:text})
        })
    }
  render() {
    return (
      <div className='div'>
    {this.state.list}
      </div>
    )
  }
}
