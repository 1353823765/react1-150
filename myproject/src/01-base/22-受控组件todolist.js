import React, { Component } from "react";
export default class One extends Component {
  state = {
    myref: "",
    list: [
      {
        id: 1,
        mytext: "",
        ischeckbox: false,
      },
    ],
  };
  render() {
    var newlist = this.state.list.map((item, index) => (
      <li key={item.id} style={{ listStyle: "none" }}>
        <input
          type={"checkbox"}
          checked={item.ischeckbox}
          onChange={() => this.delchecked(index)}
        ></input>
        <span style={{ textDecoration: item.ischeckbox ? "line-through" : "" }}>
          {item.mytext}
        </span>
        <button
          onClick={() => {
            this.del(index);
          }}
        >
          DEL
        </button>
      </li>
    ));
    return (
      <div>
        <input
          value={this.state.myref}
          onChange={(event) => {
            this.setState({ myref: event.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            this.tips();
          }}
        >
          ADD
        </button>
        <ul>{(this.state.list.mytext = newlist)}</ul>
      </div>
    );
  }
  delchecked(index) {
    let newlist = [...this.state.list];
    newlist[index].ischeckbox = !newlist[index].ischeckbox;
    this.setState({ list: newlist });
    console.log(index);
    console.log(newlist);
  }
  tips = () => {
    var arr = [...this.state.list];
    arr.push({
      id: Math.random() * 10000000,
      mytext: this.state.myref,
      ischeckbox: false,
    });
    this.setState({
      list: arr,
      myref: "",
    });
    // this.setState({myref:""})
  };
  del(index) {
    var del = [...this.state.list];
    del.splice(index, 1);
    this.setState({ list: del });
  }
}
