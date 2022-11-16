import React, { Component } from "react";
import axios from "axios";
import "../css/02-上映电影.css";
var bus={
    list:[],
    sub(cbfunction){
        this.list.push(cbfunction)
    },
    pub(text){
        this.list.forEach((cbfunction)=>
        cbfunction&&cbfunction(text)
        )
    }
}
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    axios({
      url: "film.json",
      method: "get",
    }).then(
      (res) => (
        console.log(res.data.data.films),
        this.setState({ list: res.data.data.films })
      )
    );
  }
  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <Two key={item.filmId} {...item}></Two>
        ))}

        <Three></Three>
      </div>
    );
  }
}
class Two extends Component {
  render() {
    var { name, poster, synopsis, category } = this.props;

    return (
      <div>
        <img src={poster} alt={name} onClick={()=>{
            bus.pub(synopsis)
        }}></img>
        <h3>{name}</h3>
        <h5>{category}</h5>
      </div>
    );
  }
}
class Three extends Component {
    state={
        value:"",
       
    }
  render() {
    bus.sub((text)=>this.setState({value:text})) 
    return <div className="div">
    {this.state.value}
    </div>;
  }
}
