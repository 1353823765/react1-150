import axios from "axios";
import React, { Component } from "react";
import "../css/02-上映电影.css";
const Golbalevent = React.createContext();
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
    axios({
      url: "http://localhost:3000/film.json",
      methods: "get",
    }).then((res) =>
      this.setState({ list: res.data.data.films })
    );
  }
  render() {
    return (
      <Golbalevent.Provider
        value={{
          call: "打电话",
          info:this.state.info,
          changeinfo:(value)=>this.setState({info:value})
        }}
      >
        <div>
          {this.state.list.map((item) => (
            <Two key={item.filmId} {...item}></Two>
          ))}
          <Three></Three>
        </div>
      </Golbalevent.Provider>
    );
  }
}
class Two extends Component {
  render() {
    let { synopsis, name, poster, category } = this.props;
    return (
      <Golbalevent.Consumer>
        {(value) => {
          return (
            <div>
              <img
                src={poster}
                onClick={() => {
                value.changeinfo(synopsis)
                }}
                alt={name}
              ></img>
              <h5>{name}</h5>
              <h5>{category}</h5>
            </div>
          );
        }}
      </Golbalevent.Consumer>
    );
  }
}
class Three extends Component {
  render() {
    // console.log(this.props.event)
    return (
      <Golbalevent.Consumer>
        {(value) => {
          return (
            <div className="div">
              <span>通过点击子组件获取的内容----》{value.info}</span>
            </div>
          );
        }}
      </Golbalevent.Consumer>
    );
  }
}
