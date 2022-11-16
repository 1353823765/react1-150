import React, { useState } from "react";
export default function One() {
  const [list, setlist] = useState([]);
  const [text, settext] = useState("");
  const id = Math.random() * 1000000;
  const handleChange = (event) => {
    // console.log(event.target.value)
    settext(event.target.value);
  }
  
  const add = () => {
    var arr = [...list]
    arr.push({
      text,
      id,
    });
    settext("")
    setlist(arr);
    console.log(list);
  };
   const del=(index)=>{
      var arr=[...list]
      arr.splice(index,1)
      setlist(arr)
  }
  return (
    <div>
      <input type={"text"} onChange={handleChange} value={text}></input>
      <button onClick={add}>ADD</button>
      {list.map((item,index) => (
        <li key={item.id}>
          {item.text}
          <button onClick={()=>del(index)}>DEL</button>
        </li>
      ))}
    </div>
  );
}
