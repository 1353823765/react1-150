import React from 'react'
import "./css/App.css"
import Indexrouder from "./router/Indexrouter"
import Tabbar  from './components/Tabbar'
import "../css/Tabbar.css"
export default function App() {
  return (
    <div>
    
      <Indexrouder>
      <Tabbar></Tabbar>
      </Indexrouder>
     
    </div>
  )
}


