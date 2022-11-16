const Tabbarreducer=(prevState={
    show:true
},action)=>{
    console.log(prevState)
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