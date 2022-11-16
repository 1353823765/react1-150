import React, { useState, useRef } from "react";
export default function One() {
  //useState，useRef记忆状态的2种方式
  const [num, setnum] = useState(0);
  //useRef对象中的current为起始数据0
  var refnum = useRef(0);
  var num1 = 0;
  return (
    <div>
      <button
        onClick={() => {
          setnum(num + 1);
          refnum.current++;
          num1++;
        }}
      >
        add
      </button>
      <p>useState记忆状态——{num}</p>
      <p>useRef记忆状态——{refnum.current}</p>
      <p>定义变量状态——{num1}</p>
    </div>
  );
}
