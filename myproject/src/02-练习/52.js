import React, { useState } from "react";
export default function One() {
  const [text, settext] = useState("");
  const [list, setlist] = useState([]);
  const id = Math.random() * 10000000;
  const add = () => {
    var arr = [...list];
    arr.push({
      text,
      id,
    });
    settext("");
    setlist(arr);
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
              Del
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
