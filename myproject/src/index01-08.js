import React from "react";
import ReactDOM from "react-dom";
// antd PC端css import 'antd/dist/antd.min.css';
 import {Provider} from "react-redux"
// import  App from "./01-base/01-class类组件";
// import App from "./01-base/02-函数组件";
// import   App from   "./01-base/03-类组件与函数组件嵌套";
// import App from "./01-base/04-组件的样式";
// import App from "./01-base/05-事件绑定this指向";
// import  App from "./01-base/06-ref中的严格模式refs";
// import App from "./01-base/07-ref新写法";
// import App from "./01-base/08-state状态";
// import App from "./01-base/09-循环渲染";
// import App from "./01-base/10-todolist案例";
// import App from "./01-base/11-dangerouslySetInnerHTML(代码片段展示）";
// import App from "./01-base/12-电影院选项卡";
// import App from "./01-base/13-setstate同步异步";
// import App from "./01-base/14-better-scroll";
// import App from "./01-base/15-电影院菜单better-scroll";
// import App from "./01-base/16-prop类属性";
// import App from "./01-base/17-函数式组件传值";
// import App from "./01-base/18-属性和状态";
// import App from "./01-base/19-受控组件";
// import App from "./01-base/20-非受控组件";
// import App from "./01-base/21-受控组件电影查询";
// import App from "./01-base/22-受控组件todolist";
// import App from "./02-advanced/01-子传父";
//  import App from "./02-advanced/02-非受控电影院选项卡";
// import App from  "./02-advanced/03-受控电影选项卡";
// import App from "./02-advanced/04-父子通信表单组件";
// import App from "./02-advanced/05-ref表单组件";
//  import App from "./02-advanced/06-中间人模式";
// import App from "./02-advanced/07-订阅发布模式";
// import App from "./02-advanced/08-订阅发布模式应用";
// import App from "./02-advanced/09-供应商context";
// import App from "./02-advanced/10-react插槽";
// import App from "./02-advanced/11-插槽抽屉案例"; 
// import App from "./02-advanced/12-生命周期-初始化";
// import App from "./02-advanced/13-生命周期-初始化案例";
// import App from "./02-advanced/14-生命周期-更新阶段-1";
// import App from "./02-advanced/15-生命周期-更新阶段-2";
// import App from "./02-advanced/16-生命周期-更新阶段案例"; 
// import  App from "./02-advanced/17-生命周期-更新阶段-3";
// import App from "./02-advanced/18-生命周期-更新阶段案例-3";
// import App from "./02-advanced/19-生命周期-销毁阶段-4";
// import App from "./02-advanced/20-新生命周期-初始化-1";
// import App from "./02-advanced/21-新生命周期-案例-1";
// import App from "./02-advanced/22-新生命周期-2";
// import App from "./02-advanced/23-新生命周期案例-3";
// import App from "./02-advanced/24-性能优化";
// import App from "./02-advanced/25-轮播组件swiper-同步";
// import App from "./02-advanced/26-轮播组件swiper-异步";
// import App from "./02-advanced/27-swiper组件";
// import App from "./03-hooks/01-useState";
// import App from "./03-hooks/02-todolist";
// import App from "./03-hooks/03-useEffect-1";
// import App from "./03-hooks/04-useEffect-2";
// import App from "./03-hooks/05-useEffect案例";
// import App from "./03-hooks/06-useEffect销毁-3";
// import App from "./03-hooks/07-usecallback-1";
// import App from "./03-hooks/08-usecallback-2";
// import App from "./03-hooks/09-usememo";
// import App from "./03-hooks/10-useRef";
// import App from "./03-hooks/11-useRef-1";
// import App from "./03-hooks/12-usecontext";
// import App from "./03-hooks/13-useReducer";
// import App from "./03-hooks/14-useReducer-2";
// import App from "./03-hooks/15-useReducer-3";
//  import App from "./04-router/App";
// import App from "./04-router/router/Indexrouter"
// import App from "./05-redux/App";
// import App from "./06-react-redux/App";
// import {store ,persistor}from "./06-react-redux/redux/store"
// import { PersistGate } from 'redux-persist/integration/react'
// import App from "./07-antd/01-antd引入"
// import App from "./07-antd/02-栅格"
// import App from "./07-antd/03-layout"
// import App from "./07-antd/04-下拉菜单"
// import App  from "./07-antd/05-步骤条"
// import App from "./07-antd/06-轮播"
// import App from "./07-antd/07-表格"
// import App from "./07-antd/08-树形控件"
// import App from "./07-antd/09-对话框"
import App from "./08-antd-mobile/App"
import {store,persistor} from "./08-antd-mobile/redux/store"
import {PersistGate} from "redux-persist/integration/react"
// import App from "./02-练习/01";
// import App from "./02-练习/02";
// import App from "./02-练习/03";
// import App from "./02-练习/04";
// import App from "./02-练习/05";
// import App from "./02-练习/06";
// import App from "./02-练习/07";
// import App from "./02-练习/08";
// import App from "./02-练习/09";
// import App from "./02-练习/10";
// import App from "./02-练习/11";
// import App from "./02-练习/12";
// import App from "./02-练习/13";
// import  App from "./02-练习/14";
// import  App from "./02-练习/15";
// import  App from "./02-练习/16";
// import  App from "./02-练习/17";
// import  App from "./02-练习/18";
// import  App from "./02-练习/19";
// import  App from "./02-练习/20";
// import  App from "./02-练习/21";
// import  App from "./02-练习/22";
// import  App from "./02-练习/23";
// import  App from "./02-练习/25";
// import  App from "./02-练习/27";
// import  App from "./02-练习/28";
// import  App from "./02-练习/29";
// import  App from "./02-练习/30";
// import  App from "./02-练习/31";
// import  App from "./02-练习/32";
// import  App from "./02-练习/33";
// import  App from "./02-练习/34";
// import  App from "./02-练习/35";
// import  App from "./02-练习/36";
// import  App from "./02-练习/37";
// import  App from "./02-练习/38";
// import  App from "./02-练习/39";
// import  App from "./02-练习/40";
// import  App from "./02-练习/41";
// import  App from "./02-练习/42";
// import  App from "./02-练习/43";
// import  App from "./02-练习/44";
// import  App from "./02-练习/45";
// import  App from "./02-练习/46";
// import  App from "./02-练习/47";
// import  App from "./02-练习/48";
// import  App from "./02-练习/49";
// import  App from "./02-练习/50";
// import  App from "./02-练习/51";
// import  App from "./02-练习/52";
// import  App from "./02-练习/53";
// import App from "./02-练习/54";
// import App from "./02-练习/55";
// import App from "./02-练习/56";
// import App from "./02-练习/57";
// import App from "./02-练习/58";
// import App from "./02-练习/59";
ReactDOM.render(
  //<React.StrictMode>为开启严格模式
  //  <React.StrictMode>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
    </Provider>,
  //  </React.StrictMode>,
  // <App/>,
  document.getElementById("root")
);
