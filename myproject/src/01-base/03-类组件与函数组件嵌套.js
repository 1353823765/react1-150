//导入核心库
// import React from "react"
import React,{Component} from "react"
//创建类组件
class Navtop extends Component{
        render()
        {
        return <div>
                顶部导航栏
                 </div>
        }
}
// 中间层类组件
class Navtwo extends Component{
        render()
        {
                return<div>
                 第2层中间层</div>
        }
}
// 函数组件es5写法
function Textnav (){
       
        
           return <div>
         第3层页面主题</div>     
        
     
}
// 函数组件es6写法
const Tipsnav=()=><div>
      ES6写法第4层</div>
  //将以上4个类组件函数组件导出
export default   class App extends Component{
        render(){
                return(
                   <div>
                    <Navtop></Navtop>
                    <Navtwo></Navtwo>
                   <Textnav></Textnav>
                   <Tipsnav></Tipsnav>
                    </div>     
                )
        }
  }
 