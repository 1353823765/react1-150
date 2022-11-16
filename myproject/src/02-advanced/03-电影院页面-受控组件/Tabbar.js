import React, { Component } from "react";
//第一种方式来实现选项卡功能通过 子传父调用父组件中的tips(index)来实现功能
// export default class Tabbar extends Component {
//   render() {
//     return (
//       <div>
//         {console.log(this.props)}
//         <ul>
//           {this.props.event.list.map((item, index) => (
//             <li
//               key={item.id}
//               className={this.props.event.current === index ? "active" : ""}
//               onClick={() => {
//                 this.props.mytext(index);
//               }}
//             >
//               {item.mytext}
//             </li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
export default class Tabbar extends Component {
  render() {
    return (
      <div>
       {/*console.log(this.props)*/} 
        <ul>
          {this.props.event.list.map((item, index) => (
            <li
              key={item.id}
              className={this.props.event.current === index ? "active" : ""}
              onClick={() => {
                this.tips(index)
              }}
            >
              {item.mytext}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  tips=(index)=>{
 this.props.current(index)
  }
}
