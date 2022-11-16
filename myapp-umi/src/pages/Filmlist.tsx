import React, { Component } from 'react'

class Filmlist extends Component {
  render() {
    console.log(this.props)
    return (
      <div>Filmlist登入成功
<button onClick={()=>{
    localStorage.removeItem("token")
    this.props.history.push("/login")
}}>退出登入</button>

      </div>
    )
  }
}
Filmlist.wrappers=["@/wrappers/Auth"]
//意思为将Filmlist组件包装一个父组件Auth.tsx 这个父组件在我们新建的文件夹wrappers中
export default Filmlist