import React, { Component } from "react";
import ReactDOM from "react-dom";
// export default class One extends Component {
//   constructor() {
//     super();
//     this.state = {
//       list: ["第一行", "第二行", "第三行"],
//     };
//     this.text = { name: "点击" };
//   }
//   render() {
//     通过原生的js map方法来遍历数据
//     将list中的值大打印到页面
//     设置一个变量来获取数据列表
// var  newlist=this.state.list.map(item=><li key={item}>{item}</li>)
//     return (
//       <div>
//         <ul>
//           {newlist}
//         </ul>
//       </div>
//     )
//   }
// }
export default class One extends Component{
   state={
     list:["第一行","第二行","第三行"]
   }
   //将list数组输出到页面渲染出来
   //设置变量用数组的map()方法来实现列表是中的设置
   render(){  
    var newlist=this.state.list.map((item)=><li key={item}>{item}</li>)
    return <div>
           <ul>
            {this.state.list=newlist}
            </ul>    
          </div>
    
   }
}