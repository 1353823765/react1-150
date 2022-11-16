
const Cityreducer=(prevState={
    city:"北京"
},action)=>{
    let arr={...prevState}
    console.log("store.js-state",prevState)
    console.log( "store.js-action",action)
    switch(action.type){
        case "cityinfo":
            arr.city=action.pyload
            return arr
         default : return prevState
    }

}
export default Cityreducer