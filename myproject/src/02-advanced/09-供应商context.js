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
      <Golbalevent.Provider
        value={{
          info: this.state.info,
          changeinfo: (value) => {
            this.setState({ info: value });
          },
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
    const { name, poster, synopsis, category } = this.props;
    return (
      <Golbalevent.Consumer>
        {(value) => {
          {
            // console.log(value);
          }
          return (
            <div>
              <img
                src={poster}
                alt={name}
                onClick={() => {
                  value.changeinfo(synopsis);
                }}
              ></img>
              <h3>{name}</h3>
              <h4>{category}</h4>
            </div>
          );
        }}
      </Golbalevent.Consumer>
    );
  }
}
class Three extends Component {
  state = {
    text: "",
  };
  render() {
    return (
      <Golbalevent.Consumer>
        {(value) => {
          return (
            <div className="div">
              {console.log(value)}
              {value.info}
            </div>
          );
        }}
      </Golbalevent.Consumer>
    );
  }
}
