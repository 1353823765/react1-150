
//  import {Component} from 'react'

 import {connect} from "react-redux"

import "./css/App.css"
import Indexrouder from "./router/Indexrouter"
import Tabbar  from './components/Tabbar'
 function App(props) {
  return (
    <div>
    
      <Indexrouder>
      {props.show&&<Tabbar></Tabbar> }
      </Indexrouder>

    </div>
  )
}
export default connect((state)=>{
  console.log(state)
  return {
    a:1,
    b:2 ,
    show:state.Tabbarreducer.show
  }
})(App)

//类组件写法
// export default class App extends Component { 
//   state={
//     showtab:store.getState()
//   }
//  componentWillUnmount(){
//   store.subscribe(()=>{
//          //为获取的当前的状态
//              store.getState()
//             console.log("Appjs",store.getState())
//         this.setState({
//           showtab:store.getState().show
//         })
        
//         })
//  }
//   render() {
  
//     return (
//       <div >
//       <Indexrouder>
//       { <Tabbar></Tabbar>}
//       </Indexrouder>
//       </div>
//     )
//   }
// }


