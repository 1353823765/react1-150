
export default{
 namespace:"filmname",
 state:{
    list:[]
 },
 reducers:{
   changelist(prevState,action){
      console.log(action)
     return {
      ...prevState,
      list:action.pyload
     }
   },
   clearlist(prevState){
      return {
         ...prevState,
         list:[]
        }
   }
 },
 effects:{
    *getlist(action,obj){
// console.log("DD阿诗丹顿")
// console.log(action,obj)
const{put,call}=obj 
var res=yield call(GETLIST,action.pyload.cityId)
// console.log(res)
yield put({
   type:"changelist",
   pyload:res
})
    }
 }
}
async function GETLIST(id){
   console.log(id)
 var res=await fetch(`https://m.maizuo.com/gateway?cityId=${id}&ticketFlag=1&k=7026938`,{
   headers:{
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16675641924707786667589633","bc":"110100"}',
'X-Host':' mall.film-ticket.cinema.list'
   }
 }).then(res=>res.json())
  console.log(res.data.cinemas)
   return res.data.cinemas
}