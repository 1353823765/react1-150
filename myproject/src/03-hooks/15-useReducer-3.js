import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import "../css/02-上映电影.css";
const reducer = (prevProps, action) => {
  var newlist = { ...prevProps };
  console.log(newlist);
  console.log(action);
  switch (action.type) {
    case "changetype":
      newlist.list = action.value;
      return newlist;
    case "changeinfo":
      newlist.info = action.info;
      return newlist;
    default:
      return prevProps;
  }
};
const inlist = {
  list: [],
  info: "",
};
const Golbaltext = React.createContext();
export default function One() {
  const [list, setlist] = useReducer(reducer, inlist);
  console.log(list);
  useEffect(() => {
    axios({
      url: "film.json",
    }).then(
      (res) => (
        console.log(res.data.data.films),
        setlist({
          type: "changetype",
          value: res.data.data.films,
        })
      )
    );
  }, []);
  return (
    <Golbaltext.Provider value={{ list, setlist }}>
      <div>
        {list.list.map((item) => (
          <Two key={item.filmId} {...item}></Two>
        ))}
        <Three></Three>
      </div>
    </Golbaltext.Provider>
  );
}

function Two(props) {
  const { setlist } = useContext(Golbaltext);
  const { name, poster, category, synopsis } = props;
  return (
    <div>
      <img
        src={poster}
        alt={name}
        onClick={() => {
          setlist({
            type: "changeinfo",
            info: synopsis,
          });
        }}
      ></img>
      <h3>{name}</h3>
      <h4>{category}</h4>
    </div>
  );
}
function Three() {
  const { list } = useContext(Golbaltext);
  return <div className="div">{list.info}</div>;
}
