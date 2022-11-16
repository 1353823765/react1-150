import React, { useContext, useReducer, useState } from "react";
const reducer = (prevState, action) => {
  console.log(prevState, action);
  var newcolor = { ...prevState };
  switch (action.type) {
    case 0:
      newcolor.colora = action.colora;
      return newcolor;
    case 1:
      newcolor.colorb = action.colorb;
      return newcolor;
    case 2:
      newcolor.colorc = action.colorc;
      return newcolor;
    default:
      return prevState;
  }
};
const colorinfo = {
  colora: "orange",
  colorb: "blue",
  colorc: "red",
  list: ["A", "B", "C"],
};

const Golbaltext = React.createContext();
export default function One() {
  const [color, setcolor] = useReducer(reducer, colorinfo);
  {
    // console.log(color.list);
  }
  return (
    <Golbaltext.Provider value={{ color, setcolor }}>
      <div>
        {color.list.map((item, index) => (
          <button
            key={item}
            onClick={() => {
              setcolor({
                type: index,
                colora: "#9f12e1",
                colorb: "#C418B0",
                colorc: "#0FD464",

              });
            }}
          >
            {item}
          </button>
        ))}
        {/* <button 
      onClick={()=>{setcolor({
        type:"A"
      })} } 
      >A</button>
      <button  onClick={()=>{setcolor({
        type:"B"
      })}} >B</button>
      <button  onClick={()=>{setcolor({
        type:"C"
      })}}>C</button> */}
        <A></A>
        <B></B>
        <C></C>
      </div>
    </Golbaltext.Provider>
  );
}

function A() {
  let {color}=useContext(Golbaltext);
  // console.log(color)
  return (
    <div
      style={{
        background: color.colora,
      }}
    >
      A组件
    </div>
  );
}
function B() {
  let { color } = useContext(Golbaltext);
  // console.log(color)
  return <div style={{ background: color.colorb }}>
  B组件
  </div>;
}
function C() {
  let { color } = useContext(Golbaltext);
  // console.log(color)
  return <div style={{ background: color.colorc }}>
  C组件
  </div>;
}
