import React, { Component } from "react";
import axios from "axios";
import BScroll from "better-scroll";
export default class Filmbox extends Component {
  constructor() {
    super();
    this.state = {
      Filmname: [],
      Copyname: [],
    };
    axios({
      method: "get",
      url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
        "X-Host": " mall.film-ticket.cinema.list",
      },
    })
    .then((res) => 
    {
     
      // console.log(res.data.data.cinemas);
      this.setState({ Filmname: res.data.data.cinemas ,
                   Copyname: res.data.data.cinemas });

      // this.setState({ Copyname: res.data.data.cinemas });

       new   BScroll(".bigdiv")
    }
    );
    
    
    // console.log(this.state.Filmname)
  }
  render() {
    return (
      <div>
      
        <input onInput={this.tips}/>
        <div className="bigdiv" style={{"background":"orange","height":"500px" ,overflow:"hidden"}}>
        <div className="smalldiv">
         {this.state.Filmname.map((item)=>(<div className="div1" key={item.cinemaId}>{item.name}<p>{item.address}</p></div>))}
        </div>
        </div>
      </div>
    );
  }
  tips = (event) => {
    //通过数组的值与input输入框的值进行过滤
    var newboss = this.state.Copyname.filter(
      (item) =>
        item.name.toUpperCase().includes(event.target.value.toUpperCase()) ||
        item.address.toUpperCase().includes(event.target.value.toUpperCase())
    );
    //同步中this.state拿到的是原来的状态拿不到最新的状态
    //如果想拿到最新的状态要在同步中将this.state当做异步来执行用一个setTimeout
     console.log(this.state.Filmname)
     //能得到最新的状态
    this.setState({ Filmname: newboss });
         setTimeout(()=>{
          console.log(this.state.Filmname)
         },0)
  };
}
