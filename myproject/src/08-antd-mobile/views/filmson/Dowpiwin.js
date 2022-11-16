// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { Image, List ,InfiniteScroll} from 'antd-mobile'

// import { NavLink, useHistory } from "react-router-dom";
// import Item from "antd-mobile/es/components/dropdown/item";

// export default function Dowpiwin(props) {
//   const [list, newlist] = useState([]);
//   const count=useRef(0)
//   useEffect(() => {
//     axios({
//       url: "film.json",
//     }).then(
//       (res) => (console.log(res.data.data.films), newlist(res.data.data.films))
//     );
//   }, []);

//   // 定义一个函数来获取点击后通过item.id来进行跳转
//   //第2种写法用原生js的location.href进行跳转
//   // const Changeinfo = (item) => {
//   //   console.log(item);
//   //   //  原生js的写法
//   //   window.location.href = `#/dital/${item}`;
//   // };
//   //
//   // 第3种写法
// // const [history]=useHistory()
//   const Changeinfo=(item)=>{
//   //props这个属性是通过父传过来的，是通过Roter这个父传过来的他爹在Film组件中
//     console.log(props)
//     //第一种传参方动态路由
//     props.history.push(`/dital/${item}`)
//   // 第2中传参方式通过history.push
//   //  props.history.push({pathname:"/dital/",query:{myid:item}})
//    //第3种传参方式state
//   //  props.history.push({pathname:"/dital/",state:{myid:item}})
//   }
//   return (  <div>

//    {/*  <div>
//       {list.map((item) => (
//         <li key={item.filmId} style={{listStyle:"none"}}>
//           {/* 第一种路由实现方式用Navlink
//         <NavLink to={"dowpiwin"+item.filmId}>
//       <img src={item.poster} alt={item.name} style={{height:"300px"}}></img>
//       </NavLink> }
//           <p

//             onClick={() => {
//               Changeinfo(item.filmId);
//             }}
//           > {item.name}</p>
//         </li>
//       ))}
//     </div> */}
//     <List>
//     {list.map(item=> (
//       <List.Item
//          key={ item.filmId}
//         prefix={
//           <Image
//             src={item.poster}
//             // style={{ borderRadius: 20 }}
//             // fit='cover'
//             width={80}
//             // height={40}
//           />
//         }
//         description={<div>
//            <div>主演{item.director}</div>
//            <div>剧情{item.category}|{item.nation}|{item.runtime}分钟</div>
//           </div>}
//       >
//         {item.name}{item.item.name}
//       </List.Item>
//     ))}
//     </List>
//     <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
//     </div>
//   );
// }

import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
// import { NavLink } from 'react-router-dom'
import { Image, List, InfiniteScroll } from "antd-mobile";

export default function Nowplaying(props) {
  const [list, setlist] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const count = useRef(0);

  // useEffect(() => {
  //     axios({
  //         url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
  //         headers: {
  //             'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
  //             'X-Host': 'mall.film-ticket.film.list'
  //         }
  //     }).then(res => {
  //         console.log(res.data.data.films)
  //         setlist(res.data.data.films)
  //     })
  // }, [])

  const history = useHistory();

  const handleChangePage = (id) => {
    // console.log("click")

    // window.location.href="#/detail/"+id

    // console.log(props)
    // props.history.push(`/detail/${id}`)
    // this.props.history.push(`/detail/${id}`)

    //1 -动态路由传参
    history.push(`/dital/${id}`);

    // 2- query传参
    // history.push({ pathname : '/detail' ,query : { myid: id} })

    // 3- state传参
    // history.push({pathname:"/detail",state:{myid:id}})
  };

  const loadMore = () => {
    
    count.current++;

    sethasMore(false);
    axios({
      url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=1886067`,
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        "X-Host": "mall.film-ticket.film.list",
      },
    }).then((res) => {
      // console.log(res.data.data.films)
      setlist([...list, ...res.data.data.films]);

      sethasMore(res.data.data.films.length > 0);
    });
  };

  return (
    <div>
      <List>
        {list.map((item) => (
          <List.Item
            onClick={() => handleChangePage(item.filmId)}
            key={item.filmId}
            prefix={
              <Image
                src={item.poster}
                // style={{ borderRadius: 20 }}
                // fit='cover'
                width={80}
                // height={40}
              />
            }
            description={
              <div>
                {item.grade ? (
                  <div>观众评分:{item.grade}</div>
                ) : (
                  <div style={{ visibility: "hidden" }}>观众评分</div>
                )}

                <div>
                  主演：{item.director}
                  {item.nation}|{item.runtime}分钟
                </div>
              </div>
            }
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  );
}
