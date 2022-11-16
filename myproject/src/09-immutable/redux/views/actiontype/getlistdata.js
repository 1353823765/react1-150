  import axios from "axios"
//  function getListData() {
//     return(dispatch)=>{
//     axios({
//         method: "get",
//         url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
//         headers: {
//           "X-Client-Info":
//             '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
//           "X-Host": " mall.film-ticket.cinema.list",
//         },
//       }).then(
//         (res) => {
//             // console.log(res.data.data.cinemas)
//              dispatch({
//                  type:"citylist",
//                 list:res.data.data.cinemas
//                 })
                
//         }
//       )  
   
//     }
// }
//ES6的promise写法，用promise返回是一个promise对象的特点实现
function getListData() {
  return axios({
  
      method: "get",
      url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
        "X-Host": " mall.film-ticket.cinema.list",
      },
    }).then(
      (res) => {
          // console.log(res.data.data.cinemas)
          return({
               type:"citylist",
              list:res.data.data.cinemas
              })
              
      }
    )  
 
  }
//es7 async await写法等价于ES6 promise
//  async  function getListData() {
//        let listdata= await  axios({
    
//         method: "get",
//         url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
//         headers: {
//           "X-Client-Info":
//             '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
//           "X-Host": " mall.film-ticket.cinema.list",
//         },
//       }).then(
//         (res) => {
//             // console.log(res.data.data.cinemas)
//             return({
//                  type:"citylist",
//                 list:res.data.data.cinemas
//                 })
                
//         }
//       )  
//      return listdata
//     }

export default getListData