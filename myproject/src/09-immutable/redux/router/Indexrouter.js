import React from 'react'
import {HashRouter as Router,Redirect,Route, Switch} from "react-router-dom"
import Film from "../views/Film"
import Filmbox from "../views/Filmbox"
import Filmname from '../views/Filmname'
import NotFound from '../views/NotFound'
import Dital from '../views/Dital'
import Login from '../views/Login'
import Mylist from '../views/Mylist'
import City from '../views/City'
import Search from '../views/Search'
//BrowserRouter 它是没有#好的，但是它是真正会向后端发送请求的，如果恰巧后端没有数据给你
//跳转过去会报404错误
function istoken ( ){
  return localStorage.getItem("token")
}
export default function App(props) {
  //重定向内容redirect 
  return (
    <div>
   
      <Router>
      {props.children}
       <Switch>
         <Route path="/film" component={Film}></Route>
          {/* <Route path="/filmname" component={Filmname}></Route>  */}
         <Route path="/filmbox" component={Filmbox} exact></Route>
         <Route path="/filmbox/search" component={Search} ></Route>
      {/*   <Route path="/filmname" render={(props)=>{
          console.log(props)
          return istoken()?<Filmname {...props}></Filmname>:<Redirect to="/login"></Redirect>}}> 
        </Route>
       <Route pash="/login" component={Login}></Route>
         
         <Route path="/dital" component={Dital}></Route> */}
          <Route path="/filmname" render={(props)=>{ return istoken() ?<Filmname {...props}></Filmname>:<Login></Login>}}></Route>
         <Route path="/dital/:myid" component={Dital}></Route> 
         <Route path="/mylist" component={Mylist}></Route>
         <Route path="/city" component={City}></Route>
         <Redirect from='/' to="/film" exact ></Redirect>
         
         <Route component={NotFound}></Route>
         </Switch>
      </Router>
       
    </div>
  )
}
