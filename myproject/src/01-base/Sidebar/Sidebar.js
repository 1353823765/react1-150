  import React  from 'react'

export default function Sidebar(props) {
   let {bg,x}=props

  return (
    <div style={{background:bg ,width:"100px"}} >
    <ul style={{listStyle:x}}>
         <li>1</li>
         <li>2</li>
         <li>3</li>
         <li>4</li>
         <li>5</li>
         <li>6</li>
         <li>7</li>
         <li>8</li>
         </ul>
    </div>
  )
}

