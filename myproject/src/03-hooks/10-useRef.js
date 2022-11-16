import React, { useRef, useState } from "react";
export default function One() {
  const myref = useRef();
  const [list, setlist] = useState([]);
  const [text, settext] = useState("");
  const id = Math.random() * 1000000;
  //添加
  const add = () => {
    var arr = [...list];
    arr.push({
      text,
      id,
    });
    console.log(arr);
    setlist(arr);
    settext((myref.current.value = ""));
  };
  // 删除
  const del = (index) => {
    var arr = [...list];
    arr.splice(index, 1);
    setlist(arr);
  };
  return (
    <div>
      <input
        onChange={() => {
          settext(myref.current.value);
        }}
        ref={myref}
      ></input>
      <button onClick={add}>add</button>
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
