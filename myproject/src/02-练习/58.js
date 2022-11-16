import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import "../css/02-上映电影.css";
const reducer = (lastState, action) => {
  var newstate = { ...lastState };
  console.log(lastState, action);
  switch (action.type) {
    case "changelist":
      newstate.list = action.value;
      return newstate;
      case "changeinfo":
        newstate.info=action.value
        return newstate
  }
};
const outlist = {
  info: "",
  list: [],
};
const Golbaltext=React.createContext();
export default function One() {
  const [list, setlist] = useReducer(reducer, outlist);
  
  console.log("list:", list.list);
  useEffect(() => {
    axios({
      url: "film.json",
    }).then(
      (res) => (
        console.log(res.data.data.films),
        setlist({
          type: "changelist",
          value: res.data.data.films,
        })
      )
    );
  }, []);
  return (  <Golbaltext.Provider value={{setlist,list}}>
    <div>
  
      {list.list.map((item) => (
        <Two key={item.filmId} {...item}></Two>
      ))}
      <Three></Three>
    </div>
    </Golbaltext.Provider>
  );
}
function Two(props) {
    const {setlist}=useContext(Golbaltext)
  const { name, poster, category, synopsis } = props;
  return (
    <div>
      <img src={poster} alt={name} onClick={()=>{
setlist({
    type:"changeinfo",
    value:synopsis
})
      }}></img>
      <h3>{name}</h3>
      <h4>{category}</h4>
    </div>
  );
}
 function Three() {
  const {list}=useContext(Golbaltext)
  return (
    <div className="div">
      {list.info}
    </div>
  )
}
