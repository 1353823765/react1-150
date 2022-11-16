 import {applyMiddleware, combineReducers, createStore,compose} from "redux"
import Cityreducer from "./redux-reducer/City-reducer"
import Citylistreducer from "./redux-reducer/Citylist-reducer"
 import Tabbarreducer from "./redux-reducer/Tabbar-reducer"
 import reduxThunk from "redux-thunk"
 import reduxPromise from "redux-promise"
// const reducer=(prevState={
//     show:true
//     ,city:"北京"
// },action)=>{
//     let arr={...prevState}
//     console.log("store.js-state",prevState)
//     console.log( "store.js-action",action)
//     switch(action.type){
//         case "A":
//             arr.show=false
//             return arr
//         case "B":
//             arr.show=true
//             return arr
//         case "cityinfo":
//             arr.city=action.pyload
//             return arr
//          default : return prevState
//     }

// }
const reducer=combineReducers({
    Tabbarreducer,Cityreducer,Citylistreducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)))

// const store =createStore(reducer,applyMiddleware(reduxThunk,reduxPromise))
export default store