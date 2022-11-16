import React, { Component, createRef } from "react";
export default class One extends Component {
  //创建ref对象
  myref = new createRef();
  //设置初始状态
  state = {
    list: [
      {
        id: 1,
        mytext: "",
      },
    ],
  };
  render() {
    //遍历状态显示
    var mylist = this.state.list.map((item, index) => (
      <li key={item.id}>
        {/*item.mytext*/}
        <span dangerouslySetInnerHTML={
            {
                __html:item.mytext
            }
        }
            
        
            
        ></span>
        <button
          onClick={() => {
            this.deltips(index);
          }}
        >
          DEL
        </button>
      </li>
    ));
    return (
      <div>
        <input type={"text"} ref={this.myref}></input>
        <button onClick={this.addtips}>add</button>
        <ul>{(this.state.list.mytext = mylist)}</ul>
        {this.state.list.length === 0 && <div>待处理事件</div>}
      </div>
    );
  }
  //添加数据函数
  addtips = () => {
    //创建新数组
    var arrlist = [...this.state.list];
    //向新建的数组中添加数据
    arrlist.push({
      id: Math.random() * 100000000,
      mytext: this.myref.current.value,
    });
    //设置更新状态
    this.setState({ list: arrlist });
  };
  //删除数据封装函数
  deltips(index) {
    //创建数组
    var dellist = [...this.state.list];
    //操作数组
    dellist.splice(index, 1);
    //跟新状态
    this.setState({ list: dellist });
    console.log(index);
  }
}
