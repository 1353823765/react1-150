import React, { Component, createRef } from "react";
export default class One extends Component {
  myref = new createRef();
  
  state = {
    list: [
      {
        id: 0,
        mylist: "",
      },
    ],
    fours: "",
  };
  render() {
   let  obj={
        listStyle:"none"
      }
    var newlist = this.state.list.map((item, index) => (
      <li key={item.id}>
        {item.mylist}
        <button
          onClick={() => {
            this.Del(index);
          }}
        >
          DEL
        </button>
      </li>
    ));
    return (
      <div>
        <input type={"text"} ref={this.myref}></input>
        <button onClick={this.Add}>ADD</button>
        <ul >{(this.state.list.mylist = newlist)}</ul>
      </div>
    );
  }
  Add = () => {
    var arrlist = [...this.state.list];
    arrlist.push({
      id: Math.random() * 100000000,
      mylist: this.myref.current.value,
    });
    this.setState({ list: arrlist });
    this.myref.current.value = "";
    console.log(arrlist);
  };
  Del = (index) => {
    var dellist = [...this.state.list];
    dellist.splice(index, 1);
    this.setState({ list: dellist });
    console.log(index);
  };
}
