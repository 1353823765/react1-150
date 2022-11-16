const Tabbarreducer=(prevState={
    show:true
},action)=>{
    let arr={...prevState}
    switch(action.type){
        case "A":
            arr.show=false
            return arr
        case "B":
            arr.show=true
            return arr
         default : return prevState
    }

}
export default Tabbarreducer