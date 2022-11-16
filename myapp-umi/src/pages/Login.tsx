import React, { Component } from 'react'

export default class Login extends Component {
  state={
   username:"",
   password:""
  }
  componentDidMount(){
    fetch("/users").then(res=>res.json()).then(res=>console.log(res))
  }
  render() {
    let {username,password}=this.state
    // console.log(this.props)
    // console.log(this.state)
    return (
      <div>Login登入页面
          <br/>
        用户名<input type={"text"} onChange={(e)=>{this.setState({username:e.target.value})}}></input>
         <br/>
       密码&nbsp;&nbsp;&nbsp;<input type={"password"} onChange={(e)=>{this.setState({password:e.target.value})}}></input>
      <br/>
  
   <button onClick={()=>{
  
  fetch(
   
    //请求目标地址
    "/users/login",
    
    {//请求方式为post
      method:"post",
      //请求头数据格式
    headers:   {
     //数据格式
     "Content-Type":"application/json"
    },
    body:JSON.stringify({
    username,
    password
   
      
    })
    }).then(res=>res.json()).then(res=>{
       if(res.ok===1){
        console.log(res.ok)
       
        localStorage.setItem("token",username)
       this.props.history.push("/filmlist")
    } 
      if(res.ok===0){
        alert("用户名密码错误")
      }
    }
   
  
     
    )
  
  
     
    
   }}>登入</button>

      </div>
    )
  }
  handclick=()=>{

  }
}
