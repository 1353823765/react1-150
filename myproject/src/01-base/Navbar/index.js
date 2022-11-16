import React, { Component } from "react";
import Props from "prop-types";
export default class Navbar extends Component {
  //类属性写法 通过类名直接访问 Navbar.title访问不需要new
  static propTypes = {
    title: Props.string,
    showbutton: Props.bool,
  };
  static defaultProps = {
    showbutton: true,
  };
  render() {
    let { title, showbutton, styles, buttonname } = this.props;
    console.log(this.props);
    return (
      <div>
        <div style={styles}>
          {showbutton && <button>{buttonname}</button>}navbar-{title}
          <button>列表</button>
        </div>
      </div>
    );
  }
}
//对象属性的写法
// Navbar.propTypes={
//   title:Props.string,
//   showbutton:Props.bool
// }

class Tips {
  a = 1; //对象属性
  static a = 100; //类属性
}
var obj = new Tips();
console.log(obj.a);
Tips.a = 100;
console.log(Tips.a);
