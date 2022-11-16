import axios from "axios";
import React, { useContext, useState, useEffect } from "react";
import "../css/02-上映电影.css";
const Golbaltext = React.createContext();
export default function One() {
  const [list, setlist] = useState([]);
  const [info, setinfo] = useState("");
  useEffect(() => {
    axios({
      url: "film.json",
      method: "get",
    }).then(
      (res) => (console.log(res.data.data.films), setlist(res.data.data.films))
    );
  }, []);
  return (
    <Golbaltext.Provider
      value={{
        call: "一个好人",
        info: info,
        changeinfo: (value) => {
          setinfo(value);
        },
      }}
    >
      <div>
        {list.map((item) => (
          <Two key={item.filmId} {...item}></Two>
        ))}
        <Three></Three>
      </div>
    </Golbaltext.Provider>
  );
}
function Two(props) {
  const value = useContext(Golbaltext);
  //   console.log(value);
  // console.log(props)
  const { name, poster, category, synopsis } = props;
  return (
    <div>
      <img
        src={poster}
        alt={name}
        onClick={() => {
          value.changeinfo(synopsis);
        }}
      ></img>
      <h3>{name}</h3>
      <h4>{category}</h4>
    </div>
  );
}
function Three() {
  const value = useContext(Golbaltext);
  return (
    <div className="div">
      <span>电影简介----</span>
      {value.info}
    </div>
  );
}
