import axios from "axios";
import React, { useState, useEffect, useMemo } from "react";
export default function One() {
  //设置一个空数组接受axios请求的数据
  const [list, setlist] = useState([]);
  //设置一个空字符串来控制input输入框，使其变成受控
  const [text, settext] = useState("");
  //用useEffect来请求数据
  useEffect(() => {
    axios({
      method: "get",
      url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
        "X-Host": " mall.film-ticket.cinema.list",
      },
    }).then(
      (res) => (
        console.log(res.data.data.cinemas), setlist(res.data.data.cinemas)
      )
    );
  }, []);
  //用uesMemo来获取一段逻辑返回的值,ussMemo也是一个记忆函数并且执行后的返回值
  //提高性能减少组件不必要的函数计算，第2个参数为依赖，依赖不变直接使用之前保存的函数
  //返回出一个计算后的值
  const Change = useMemo(
    () =>
      list.filter(
        (item) =>
          item.name.toUpperCase().includes(text.toUpperCase()) ||
          item.address.toUpperCase().includes(text.toUpperCase())
      ),
    [list, text]
  );

  return (
    <div>
      <input
        onChange={(event) =>
          //   console.log(event.target.value),
          settext(event.target.value)
        }
        value={text}
      ></input>
      <ul>
        {Change.map((item) => (
          <li key={item.cinemaId}>
            {item.name}
            <h4>{item.address}</h4>
          </li>
        ))}
        {console.log(Change)}
      </ul>
    </div>
  );
}
