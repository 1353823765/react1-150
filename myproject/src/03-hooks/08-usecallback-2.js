import React, { useState, useCallback, useMemo } from "react";
export default function One() {
  const [name, setname] = useState("tom");
  const [list, setlist] = useState([]);
  const [text, settext] = useState("");
  const id = Math.random() * 1000000;
  const handleChange = (event) => {
    settext(event.target.value);
  };
  //useCallback为记忆函数，别人更新不会影响这个函数重新创建会用之前的状态
  const add = useCallback(() => {
    var arr = [...list];
    arr.push({
      text,
      id,
    });
    settext("");
    setlist(arr);
  }, [text, list]);
  const del = useMemo(
    () => (index) => {
      var arr = [...list];
      arr.splice(index, 1);
      setlist(arr);
    },
    [list]
  );
  return (
    <div>
      {name}-
      <button
        onClick={() => {
          setname("jarry");
        }}
      >
        setname
      </button>
      <input type={"text"} onChange={handleChange} value={text}></input>
      <button onClick={add}>ADD</button>
      {list.map((item, index) => (
        <li key={item.id}>
          {item.text}
          <button onClick={() => del(index)}>DEL</button>
        </li>
      ))}
    </div>
  );
}
