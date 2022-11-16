import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import  Navbar from "./Navbar"
export default function One() {
  return (
    <div>
     {/* Alt+Shifr+A 多行注释 */}
     {/* 类组件 */}
        <Navbar title="首页导航栏" buttonname="导航列表" 
         styles={{"background":"orange"} }></Navbar>
      <Sidebar bg="yellow" x="none"></Sidebar>
    </div>
  )
}
