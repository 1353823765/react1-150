import React, { Component, createRef } from "react";
export default class One extends Component {
  //创建ref对象
  myref = new createRef();
  state = {
    list: [{ id: 1, mytext: "" }],
  };
  render() {
    var newlist = this.state.list.map((item, index) => (
      <li key={item.id}>
        {item.mytext}
        <button
          onClick={() => {
            this.deltips(index);
          }}
        >
          del
        </button>
      </li>
    ));

    return (
      <div>
        <input type={"text"} ref={this.myref}></input>
        <button onClick={this.tips}>add</button>

        <ul>{(this.state.list.mytext = newlist)}</ul>
      </div>
    );
  }
  tips = () => {
    console.log(this.myref.current.value);
    var listarr = [...this.state.list];
    listarr.push({
      id: Math.random() * 1000000000,
      mytext: this.myref.current.value,
    });
    this.setState({ list: listarr });
  };
  deltips(index) {
    var dellist = [...this.state.list];
    dellist.splice(index, 1);
    this.setState({ list: dellist });
  }
}
