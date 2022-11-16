import React, { Component } from 'react'
import axios from "axios"
import "../css/02-上映电影.css"
const Golbaltext=React.createContext();
export default class One extends Component {
    state={
        list:[],
     
    }
    componentDidMount(){
        axios({
            method:"get",
            url:"film.json"
        }).then(res=>(console.log(res.data.data.films),
                  this.setState({list:res.data.data.films})))
    }
  render() {
    return (
        <Golbaltext.Provider value={{   info:this.state.info,
             chuangeinfo:(info)=>{this.setState({info:info})}}}>
      <div>
      {
      this.state.list.map((item)=><Two key={item.filmId} {...item}>
      </Two>)
      }
      <Three></Three>
      </div>
      </Golbaltext.Provider>
    )
  }
}
class Two extends Component {
  render() {

    var {category,name,synopsis,poster}=this.props
    return (
        <Golbaltext.Consumer>
        {
            (value)=>{
                console.log(value)
                return <div>
       <img src={poster} alt={name} onClick={()=>{value.chuangeinfo(synopsis)}}></img>
       <h4>{name}</h4>
       <h3>{category}</h3>
      </div>
            }
        }
        </Golbaltext.Consumer>
     
    )
  }
}
class Three extends Component {
  render() {
   
    return (
      <Golbaltext.Consumer >
      {
        (value)=>{
          return<div className='div'>
        <span>电影简介=</span>
    {value.info}
      </div>
        }
      }
      </Golbaltext.Consumer>
      
    )
  }
}
