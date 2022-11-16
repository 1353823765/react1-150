import React,{useEffect,useState} from 'react'
export default function One() {
    const [list,setlist]=useState([])
    const [checked,setchecked]=useState(false)
    const [type,settype]=useState(0)
    const[checkedtwo,setcheckedtwo]=useState(false)
    // setchecked(!list.checked)
    // setcheckedtwo(!list.checkedtwo)
    // settype(1)
    list.push({
        checked,
        type,
        checkedtwo
    })
  
  return (
    <div>
      <input type={"checkbox"} ></input>正在热映
      <input type={"checkbox"}></input>即将上映
    </div>
  )
}
