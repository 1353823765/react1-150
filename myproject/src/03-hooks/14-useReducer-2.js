import React, { useContext, useReducer} from "react";
const reducer=(prevState,action)=>{
    var newvalue={...prevState}
    console.log(prevState,action)
    switch(action.type){
        case "A":
            newvalue.valuea=action.valuea
            return newvalue
            case "B":
                newvalue.valueb=action.valueb
                return newvalue
                default :return prevState
    }
}
const mytext={
    valuea:"人好个一",
    valueb:"人坏个一"
}
const Golbaltext=React.createContext()
export default function One() {

    const [text,settext]=useReducer(reducer,mytext)
    console.log(text)
  return (
    <Golbaltext.Provider value={{text,
        settext}}>
    <div>
  
      <button onClick={()=>{settext({type:"A",valuea:"一个好人"})}}>A</button>
      <button onClick={()=>{settext({type:"B",valueb:"一个坏人"})}}>B</button>
      <A></A>
      <B></B>
    </div>
    </Golbaltext.Provider>
  );
}
function A() {
 const {text}=useContext(Golbaltext)
 console.log(text)
  return <div>
  A组件--{text.valuea}
  </div>;
}
function B() {
    const {text}=useContext(Golbaltext)
    console.log(text)
  return <div>
  B组件--{text.valueb}
  </div>;
}
