import React, { Component } from 'react'
import { NavLink } from 'umi'
 import "./index.css"
export default class Index extends Component {
  render() {
    // console.log(this.props.location.pathname)
    if(this.props.location.pathname==="/city"||this.props.location.pathname.
    includes("/dital")){
      return <div>
        {this.props.children}
      </div>
    }
    return (
      <footer>
      
      {this.props.children}
        <ul className='ul'>
     <li className='li'><NavLink to="/film" activeClassName="active">我的</NavLink></li>     
     <li><NavLink to="/filmlist" activeClassName="active">电影</NavLink></li>  
     <li><NavLink to="/filmname"activeClassName="active">影院</NavLink></li>  
      
          </ul>
          </footer>
    )
  }
}
