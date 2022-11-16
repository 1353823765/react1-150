import React from "react";
// import { NavLink } from 'react-router-dom'
import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { withRouter } from "react-router-dom";
import { Badge, TabBar } from "antd-mobile";
import style from "./Tabbar.module.css";
// import "../css/Tabbar.css"
// export default function Tabbar() {
//   return (
//     <div  className={style.tabbar} >
//    <li>
//       <NavLink to="/film" activeClassName='li' >我的</NavLink>
//      { /* <a href='#/film'>我的</a>*/}
//       </li>
//       <li>
//       {/*<a href='#/filmname'>电影</a>  */}
//       <NavLink to="filmname" activeClassName='li'  >电影</NavLink>
//       </li>
//       <li>
//     {/*   <a href='#/filmbox'>影院</a> */}
//     <NavLink to="filmbox"  activeClassName='li' >影院</NavLink>
//       </li>
//     </div>
//   )
// }
function Tabbar(props) {
  const tabs = [
    {
      key: '/film',
      title: "我的",
      icon: <UserOutline />,
      badge: Badge.dot,
    },
    {
      key: "/filmname",
      title: "电影",
      icon: <UnorderedListOutline />,
      badge: "5",
    },

    {
      key: "/filmbox",
      title: "影院",
      icon: <AppOutline />,
    },
  ];
  return (
    <div className={style.tabbar}>
      <TabBar
        onChange={(value) => {
          props.history.push(value);
        }} activeKey={"/"+props.location.pathname.split("/")[1]}
      >
        {tabs.map((item) => (
          <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
        ))}
      </TabBar>
    </div>
  );
}
export default withRouter(Tabbar);
