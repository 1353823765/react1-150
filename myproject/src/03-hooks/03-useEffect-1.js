import React, { useEffect, useState } from "react";
import axios from "axios";
export default function One() {
  //请求axios
  const [list, setlist] = useState([]);
  // axios({
  //     url:"film.json",
  //     method:"get"
  // }).then(res=>setlist(res.data.data.films
  //     ),console.log(list))
  useEffect(() => {
    axios({
      url: "film.json",
      method: "get",
    }).then((res) => setlist(res.data.data.films), console.log(list));
  }, []);
  return (
    <div>
       {list.map((item) => (
        <li key={item.filmId}>{item.name}</li>
      ))}
    
    </div>
  );
}
