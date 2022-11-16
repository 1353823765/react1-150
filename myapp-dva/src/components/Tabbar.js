import React, { Component } from 'react'
import {NavLink} from "dva/router"
import  style from "../components/Tabbar.css" 
console.log(style);
export default class Tabbar extends Component {
 
  render() {
   
    return (
      <footer>
        <ul>
        <li>
      <NavLink to={"/film"} activeClassName={style.active}>我的</NavLink>  
        </li>
        <li><NavLink to={"/filmbox"} activeClassName={style.active}>影院</NavLink></li>
        <li><NavLink to={"/filmname"} activeClassName={style.active}>列表</NavLink></li>
        </ul>
      </footer>
    )
  }
}
