import React from 'react'
import { NavLink, Route, } from 'react-router-dom'
import Dowpiwin from "./filmson/Dowpiwin" 
import Nowpowin from './filmson/Nowpowin'
export default function Film() {
  return (
    <div> 
      <div style={{height:"200px",width:"500px","background":"orange"}}>轮播图</div>
      <div>导航栏</div>
      <ul>
      <NavLink to="/film/dowpiwin"><li>即将上映</li></NavLink>
      <NavLink to="/film/nowpowin"><li>正在热映</li></NavLink>
      </ul>
       <Route path="/film/dowpiwin" component={Dowpiwin}></Route>
       <Route path="/film/nowpowin" component={Nowpowin}></Route>
    </div> 
   
  )
}
