import axios from 'axios'
import React,{useContext,useEffect,useState} from 'react'
import "../css/02-上映电影.css";
var Golbaltext=React.createContext();
export default function One() {
  const [list,setlist]=useState([])
  const [info,setinfo]=useState("")
   useEffect(()=>{
    axios({
       url:"film.json"
    }).then(res=>(console.log(res.data.data.films),
                 setlist(res.data.data.films)))
   },[])
  return (
    <Golbaltext.Provider value={{
      info:info,
      Changeinfo:(value)=>{
        setinfo(value)
      }
    }}>
    <div>
      {
        list.map((item)=><Two key={item.filmId} {...item}></Two>)
      } 
       <Three></Three>
    </div>
    </Golbaltext.Provider>
  
  )
}
 function Two (props) {
  // console.log(props)
  var value=useContext(Golbaltext)
  console.log(value)
   const {name,poster,synopsis,category}=props
  return (
   
    <div>
    <img src={poster} alt={name} onClick={()=>{
     value.Changeinfo(synopsis) 
    }}></img>
    <h4>{name}</h4>
 <h5>{category}</h5>   
     
    </div>
   
  )
}
function Three() {
  var value=useContext(Golbaltext)
  return (
  
    <div className='div'>
      <span>电影简介====</span>{value.info}
    </div>
   
  )
}
