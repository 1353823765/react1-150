import React, { useEffect, useState, Component} from "react";

import { autorun } from "mobx";
import "./css/App.css";
import Indexrouder from "./router/Indexrouter";
import Tabbar from "./components/Tabbar";
import "../router-mobx/components/Tabbar.module.css";
import stroe from "./mobx/stroe";
import {inject,Observer,observer}from 'mobx-react'
 
 
 function App(props) {
  //const [isshowtabbar, settab] = useState(true);
  // useEffect(() => {
    //  console.log(stroe.isshow)
      
  //     console.log(stroe.isshow);
  //     settab(stroe.isshow);
  //   });
  // }, []);

  return (
    <div>
    <Observer>
    {()=>{
      return <Indexrouder>{ stroe.isshow&&<Tabbar></Tabbar>}</Indexrouder>
    }
    }
      
   </Observer> 
   </div>
  );
}

// @inject("stroe")
// @observer
//  class App extends Component {
 
//   componentDidMount(){
   
//     console.log(this.props.stroe.isshow)
//   }
//   render() {
//     return (
//       <div>
//      <Indexrouder>{this.props.stroe.isshow&& <Tabbar></Tabbar>}</Indexrouder>
        
//       </div>
//     )
//   }
// }

 export default App
