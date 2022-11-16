import React from 'react'
import { NavLink } from 'react-router-dom'

import style from "./Tabbar.module.css"
import "../css/Tabbar.css"
export default function Tabbar() {
  return (
    <div  className={style.tabbar} >
      <li>
      <NavLink to="/film" activeClassName='li' >我的</NavLink>
     { /* <a href='#/film'>我的</a>*/} 
      </li>
      <li> 
      {/*<a href='#/filmname'>电影</a>  */}
      <NavLink to="filmname" activeClassName='li'  >电影</NavLink>
      </li>
      <li>
    {/*   <a href='#/filmbox'>影院</a> */}
    <NavLink to="filmbox"  activeClassName='li' >影院</NavLink>
      </li>
    </div>
  )
}
