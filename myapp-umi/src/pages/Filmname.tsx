import React, { Component } from 'react'
import { NavBar,  DotLoading, List } from "antd-mobile"
import { SearchOutline, EnvironmentOutline } from 'antd-mobile-icons'
import { connect } from 'umi'

class Filmname extends Component {
  componentDidMount() {

    if (this.props.list.length === 0) {
      this.props.dispatch({
        type: "filmname/getlist",
        pyload: { cityId: this.props.cityId }
      })
    } else {
      console.log("缓存数据")
    }
  }

  render() {
    // console.log(this.props.list)
    return (
      <div>
        <NavBar backArrow={false} onBack={() => {
          this.props.history.push("/city")
          // console.log(this.props)
          this.props.dispatch({
            type: "filmname/clearlist"
          })
        }} back={this.props.cityname} left={<EnvironmentOutline />}
          right={<SearchOutline fontSize={20} />}>影院</NavBar>
        { this.props.loading&& <div style={{ fontSize: 20,"textAlign":"center" }}>
          <DotLoading />
        </div>}
    
          {
            // this.props.list.map(item => <li key={item.cinemaId}>{item.name}</li>)

            <List >
            {this.props.list.map(item => (
              <List.Item
                key={item.cinemaId}
              
                description={item.address}
                
              >
                {item.name}
              </List.Item>
            ))}
          </List>



          }

       



      </div>
    )
  }
}

//connect为高阶函数自动给City创建一个父组件目的为了获取父组件传过来的数据
export default connect((state) => {
  //  console.log(state)
  //  console.log(state.filmname.list)
  return {
    a: 1,
    cityname: state.city.cityname,
    list: state.filmname.list,
    cityId: state.city.cityId,
    loading:state.loading.global
  }
})(Filmname)




