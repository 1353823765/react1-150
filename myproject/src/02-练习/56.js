import React, { useReducer } from "react";
const reducer = (prevState, action) => {
  console.log(prevState, action);
  let newinfo = { ...prevState };
  switch (action.type) {
    case "left":    
    newinfo.count--
      return newinfo;
    case "right":
        newinfo.count++
      return newinfo;
    default:
      return prevState;
  }
};
const textinfo = {
  count: 0,
};
export default function One() {
  const [text, changetext] = useReducer(reducer, textinfo);
  return (
    <div>
      {console.log(text)}
      <button
        onClick={() => {
          changetext({ type: "left" });
        }}
      >
        -
      </button>
      {text.count}
      <button
        onClick={() => {
          changetext({ type: "right" });
        }}
      >
        +
      </button>
    </div>
  );
}
