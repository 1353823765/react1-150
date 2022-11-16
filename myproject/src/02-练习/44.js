import axios from "axios";
import React, { Component } from "react";
import "../css/02-上映电影.css";
const Golbaltext = React.createContext();
export default class One extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    
    };
    axios({
      url: "http://localhost:3000/film.json",
      methods: "get",
    }).then((res) => this.setState({ list: res.data.data.films }));
  }
  render() {
    return (
      <Golbaltext.Provider
        value={{
          info: this.state.info,
          changeinfo: (text) => {
            this.setState({ info: text });
          },
        }}
      >
        <div>
          {this.state.list.map((item) => (
            <Two key={item.filmId} {...item}></Two>
          ))}
          <Three></Three>
        </div>
      </Golbaltext.Provider>
    );
  }
}
class Two extends Component {
  render() {
    let { synopsis, name, poster, category } = this.props;
    return (
      <Golbaltext.Consumer>
        {(value) => {
          return (
            <div>
              <img
                src={poster}
                onClick={() => {
                  value.changeinfo(synopsis);
                }}
                alt={name}
              ></img>
              <h5>{name}</h5>
              <h5>{category}</h5>
            </div>
          );
        }}
      </Golbaltext.Consumer>
    );
  }
}
class Three extends Component {
  render() {
    return (
      <Golbaltext.Consumer>
        {(value) => {
          console.log(value);
          return (
            <div className="div">
              {value.info}
              <span>通过点击子组件获取的内容----》</span>
            </div>
          );
        }}
      </Golbaltext.Consumer>
    );
  }
}
