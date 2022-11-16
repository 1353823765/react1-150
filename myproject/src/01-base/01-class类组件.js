//创建类组件之后导入入口index.js
//自定义类
// class  Test {
//     constructor (){
//     this.name="tom";
//     this.sex="男";
//     }
//     tips(){
//       let x=10;
//       console.log(x);
//     }
//     tips1(){
//        var y=0
//         console.log(y);
//     }
// }
// var obj=new Test();
// console.log(obj.name);
// obj.tips();
// obj.tips1();
// console.log(obj.sex);
//继承react中的Component
import React from "react"
//创建类继承自react中的类固定格式
class App extends React.Component{
    render(){
        return(
        <div>第一个类组件</div>
          )
    }
}
//es6导出方式导出类
export default App;