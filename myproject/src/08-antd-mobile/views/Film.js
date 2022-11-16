import axios from 'axios'
import React, { useEffect,useState } from 'react'
import { NavLink, Route, } from 'react-router-dom'
import Dowpiwin from "./filmson/Dowpiwin" 
import Nowpowin from './filmson/Nowpowin'
import { Swiper,Tabs } from 'antd-mobile'

import Item from 'antd-mobile/es/components/dropdown/item'
// url:`https://m.maizuo.com/gateway?type=2&cityId=110100&k=5032824`,
// headers:{
//   'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
//   'X-Host': 'mall.cfg.common-banner'
export default function Film(props) {
  // const [list,setlist]=useState([])
  // useEffect(()=>{
  //  axios({
  //    url:'https://m.maizuo.com/gateway?type=2&cityId=110100&k=5032824',
  //    headers:{
  //       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
  //       'X-Host': 'mall.cfg.common-banner'}
  //  }).then((res)=>console.log(res))
      
  // },[])
  return (
    <div> 
  
      <div>
       <Swiper autoplay={true} autoplayInterval={2500} loop={true}>
       <Swiper.Item style={{"background":"orange",height:"200px"}}>111</Swiper.Item>
      <Swiper.Item style={{"background":"blue",height:"200px"}}>222</Swiper.Item> 
      <Swiper.Item style={{"background":"red",height:"200px"}}>333</Swiper.Item> 
       {
        // list.map(item=><Swiper.Item key={item.filmId}> 
        //   <img src={item.poster} alt={item.name} style={{height:"200px",width:"500px"}} ></img>
        //   </Swiper.Item>)
       }
       </Swiper>
      </div>
      
{  /*    <ul><div>导航栏</div>
      <NavLink to="/film/dowpiwin"><li>即将上映</li></NavLink>
      <NavLink to="/film/nowpowin"><li>正在热映</li></NavLink>
      </ul> */}
      <div style={{position:"sticky",top:0,background:"white"}}>
      <Tabs onChange={(value)=>{
 props.history.push(value)
      }} activeKey={props.location.pathname}>
      <Tabs.Tab title='即将上映' key='/film/dowpiwin'>
      </Tabs.Tab>
      <Tabs.Tab title='正在热映' key='/film/nowpowin'>
      </Tabs.Tab>
    </Tabs></div>
    
       <Route path="/film/dowpiwin" component={Dowpiwin}></Route>
       <Route path="/film/nowpowin" component={Nowpowin}></Route>
    </div> 
   
  )
}
