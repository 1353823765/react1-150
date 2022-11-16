const Citylistreducer=(prevState={
    list:[]
},action)=>{
    let arr={...prevState}
    console.log("store.js-state",prevState)
    console.log( "store.js-action",action)
    switch(action.type){
        case "citylist":
            arr.list=action.list
            return arr
         default : return prevState
    }

}
export default Citylistreducer