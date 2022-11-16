import {fromJS} from "immutable"
const Tabbarreducer=(prevState=fromJS({
    show:true
}),action)=>{
    // let arr={...prevState}
    switch(action.type){
        case "A":
            // arr.show=false
            // return arr
            return prevState.set("show",false)
        case "B":
            // arr.show=true
            // return arr
            return prevState.set("show",true)
         default : return prevState
    }

}
export default Tabbarreducer