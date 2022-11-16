import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
export default function Dowpiwin(props) {
  const [list, newlist] = useState([]);
  useEffect(() => {
    axios({
      url: "film.json",
    }).then(
      (res) => (console.log(res.data.data.films), newlist(res.data.data.films))
    );
  }, []);
  // 定义一个函数来获取点击后通过item.id来进行跳转
  //第2种写法用原生js的location.href进行跳转
  // const Changeinfo = (item) => {
  //   console.log(item);
  //   //  原生js的写法
  //   window.location.href = `#/dital/${item}`;
  // };
  //
  // 第3种写法
// const [history]=useHistory()
  const Changeinfo=(item)=>{
  //props这个属性是通过父传过来的，是通过Roter这个父传过来的他爹在Film组件中
    console.log(props)
    //第一种传参方动态路由
    props.history.push(`/dital/${item}`)
  // 第2中传参方式通过history.push
  //  props.history.push({pathname:"/dital/",query:{myid:item}})
   //第3种传参方式state
  //  props.history.push({pathname:"/dital/",state:{myid:item}})
  }
  return (
    <div>
      {list.map((item) => (
        <li key={item.filmId} style={{listStyle:"none"}}>
          {/* 第一种路由实现方式用Navlink
        <NavLink to={"dowpiwin"+item.filmId}>
      <img src={item.poster} alt={item.name} style={{height:"300px"}}></img>
      </NavLink> */}
          <p
           
         
            onClick={() => {
              Changeinfo(item.filmId);
            }}
          > {item.name}</p>
        </li>
      ))}
    </div>
  );
}
