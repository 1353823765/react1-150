import React, { useState } from "react";
export default function One() {
  const [list, setlist] = useState([]);
  const [text, settext] = useState("");
  const id = Math.random() * 1000000;
  const add = () => {
    var arr = [...list];
    arr.push({
      text,
      id,
    });
    setlist(arr);
    settext("");
  };
  const del = (index) => {
    var arr = [...list];
    arr.splice(index, 1);
    setlist(arr);
  };

  return (
    <div>
      <input
        type={"text"}
        onChange={(event) => {
          settext(event.target.value);
        }}
        value={text}
      ></input>
      <button onClick={add}>ADD</button>
      <ul>
        {list.map((item, index) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={() => {
                del(index);
              }}
            >
              DEL
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
