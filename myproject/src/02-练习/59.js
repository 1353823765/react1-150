
import React, { useContext, useReducer } from "react" ;

const reducer = (prevState, action) => {
  // console.log(prevState)
  var arr = { ...prevState };
//   console.log(arr, action);
  switch (action.str) {
    case "a":
      arr.list = action.type;
      return arr;
    case "b":
        arr. current++
        
            return arr
        

    default:
      return prevState;
  }
};
const infotype = {
  list: false,
  current: 0,
};
const Gobaltext = React.createContext();
export default function One() {
  const [type, settype] = useReducer(reducer, infotype);
  console.log(type);
  return (
    <Gobaltext.Provider value={{ type, settype,}}>
      <div>
        <button
          onClick={() => {
            settype({
              str: "a",
              type: !type.list,
            
            });
          }}
        >
          按钮A
        </button>

        {type.list&&<Two></Two>}
      </div>
    </Gobaltext.Provider>
  );
}
function Two() {
  const { type, settype, } = useContext(Gobaltext);
  console.log(type);
  return (
    <div style={{ height: "300px", width: "300", background: "orange" ,
 display:type.current===6?"none":"block" 
}}>
      <button
        onClick={() => {
          settype({
            str: "b",
            isshow:"none",
           
          });
        }}
      >
        按钮B
      </button>
      {type.current}
    </div>
  );
}
