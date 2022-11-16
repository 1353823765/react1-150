import React, { Component } from "react";
import axios from "axios";
import "../css/02-上映电影.css";
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      name: "",
    };
    axios({
      url: "film.json",
      method: "get",
    }).then(
      (res) => (
        console.log( "axios请求的本地json数据"   ,res.data.data.films),
        this.setState({ list: res.data.data.films })
      )
    );
  }
  render() {
    return (
      <div>
        {this.state.list.map((item) => (
          <Two
            key={item.filmId}
            {...item}
            myevent={(text) => console.log(text)
                (this.setState({ name: text }))}
          >
           
          </Two>
        ))}
        <Three myevent={this.state.name}></Three>
      </div>
    );
  }
}

class Two extends Component {
  render() {
    let { name, poster, category, synopsis } = this.props;

    return (
      <div>
        <img
          src={poster}
          alt={name}
          onClick={() => {
            this.props.myevent(synopsis);
          }}
        ></img>
        <h3>{name}</h3>
        <h5>{category}</h5>
      </div>
    );
  }
}

class Three extends Component {
  render() {

     var str=this.props.myevent
    return (
      <div className="div">
      {console.log("通过父组件传过来的数据:" ,this.props)}
     
        <span>电影简介-----</span>
         {str}
      </div>
    );
  }
}
