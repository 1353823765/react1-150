import axios from "axios";
import { observable, configure, action, runInAction } from "mobx";

//第一种写法
// configure({
//     enforceActions:"always"
// })
// const stroe=observable({
//     isshow:true,
//     changetrue(){
//         this.isshow=true
//     },
//     changefalse(){
//         this.isshow=false
//     }
// },{
//     //action是监控2个方法，专门观察可修改的value值
//   changetrue:action,
//   changefalse:action
// })

//第2种写法用es7的装饰器语法
class Stroe {
  @observable isshow = true;
  @observable list = [];
  @action changetrue() {
    this.isshow = true;
  }
  @action changefalse() {
    this.isshow = false;
  }
  //es6写法
  //  @action getListData()
  //   {
  //   return axios({

  //       method: "get",
  //       url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
  //       headers: {
  //         "X-Client-Info":
  //           '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
  //         "X-Host": " mall.film-ticket.cinema.list",
  //       },
  //     }).then(
  //       (res) => {
  //           // console.log(res.data.data.cinemas)

  //               runInAction(()=>{
  //                 this.list=res.data.data.cinemas
  //               })
  //       }

  //     )

  //   }
  //es7写法
  @action async getListData() {
    let listdata = await axios({
      method: "get",
      url: "https://m.maizuo.com/gateway?cityId=210100&ticketFlag=1&k=3476139",
      headers: {
        "X-Client-Info":
          '{"a":"3000","ch":"1002","v":"5.2.1","e":"16630692322081620324515841","bc":"210100"}',
        "X-Host": " mall.film-ticket.cinema.list",
      },
    }).then((res) => {
      // console.log(res.data.data.cinemas)
      return res.data.data.cinemas;
    });

    runInAction(() => {
      this.list = listdata;
    });
  }
}
const stroe = new Stroe();
export default stroe;
