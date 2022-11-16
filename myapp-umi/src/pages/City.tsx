import { FooterToolbar } from '@ant-design/pro-layout'
import axios from 'axios'
import React, { Component } from 'react'
import { IndexBar, List } from 'antd-mobile'
import { lorem } from 'demos'
import { connect } from 'umi'

class City extends Component {
  
  state={
    list:[]
  }
  //处理数据的函数
  filtercity = (city) => {
    // console.log(city)
    //创建一个空数组
    let citylist = [...city]
    let arr = []
    let newlist = []
    // 遍历创建一个从A到Z的一个数组
    for (let i = 65; i < 91; i++) {
      arr.push(String.fromCharCode(i))
    }
    // console.log(citylist.filter(item => item.pinyin.substring(0, 1).toUpperCase() === "A"))
    // item.pinyin.substring(0,1).toUppercase()==="A"))
    for (let key in arr) {
      //过滤数组中item中与arr中首字母相同项
      let cityitems = citylist.filter(item => item.pinyin.substring(0, 1).toUpperCase() === arr[key])
      // console.log(citylist[key])
      //如果数组长度为0不添加到对象中
      cityitems.length&&newlist.push({
        title: arr[key],
        items: cityitems
      })
    }
    return newlist
    // console.log(newlist)
  }
  changeCity=(item)=>{
    console.log(item.name,item.cityId)
    this.props.history.push("/filmname")                            
    //  console.log(this.props.dispatch)
    this.props.dispatch({
      type:"city/changecity",
      pyload:{
        cityname:item.name,
        cityId:item.cityId
      }
    })
    // console.log(this.changeCity())
  }
  componentDidMount() {
    fetch("https://m.maizuo.com/gateway?k=1480078",
      {
        headers: {
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16675641924707786667589633"}'
          , 'X-Host': 'mall.film-ticket.city.list'
        }
      }).then(res => res.json()).then(res => {
        this.filtercity(res.data.cities)
        this.setState({list:this.filtercity(res.data.cities)})
      })
  }

  render() {
          
  // console.log(this.props)
    return (
      <div style={{ height: window.innerHeight }}>
      <IndexBar>
        {this.state.list.map(group => {
          const { title, items } = group
          return (
            <IndexBar.Panel
              index={title}
              title={title}
              key={title}
            >
              <List>
                {items.map((item, index) => (
                  <List.Item key={index} onClick={()=>{this.changeCity(item)}}>{item.name}</List.Item>
                ))}
              </List>
            </IndexBar.Panel>
          )
        })}
      </IndexBar>
    </div>
    )
  }

}
export default connect(

   ()=>({})
    
//   (state)=>{
//   console.log(state)
//   return {
//     a:1,
//     cityname:state.city.cityname
//   }
// }
)(City)