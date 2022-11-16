import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
export default function One() {
  const [list, setlist] = useState([]);
  const [text, settext] = useState("");
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
  //useMemo实现模糊搜索功能
  var Serach = useMemo(
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
        onChange={(event) => {
          settext(event.target.value);
        }}
        value={text}
      ></input>
      {Serach.map((item) => (
        <li key={item.cinemaId}>
          {item.name}
          <h4>{item.address}</h4>
        </li>
      ))}
    </div>
  );
}
