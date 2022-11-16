import React,{useEffect, useState} from 'react'
import "./css/App.css"
import store from './redux/store'
import Indexrouder from "./router/Indexrouter"
import Tabbar  from './components/Tabbar'

export default function App() {
    let [showtab,setshowtab]=useState(store.getState().Tabbarreducer )
   
    useEffect(()=>{
     
      store.subscribe(()=>{
     // 为获取的当前的状态
    //      store.getState()
        // console.log(store.getState())
     setshowtab(store.getState().Tabbarreducer)   
    //  console.log(showtab) 
      })
    },[showtab])
  return (
    <div>
      <Indexrouder>
     {showtab.show&&<Tabbar></Tabbar>}
      </Indexrouder>
    </div>
  )
}


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


