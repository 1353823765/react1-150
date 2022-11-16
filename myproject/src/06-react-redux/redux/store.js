 import {applyMiddleware, combineReducers, createStore,compose} from "redux"
 import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import Cityreducer from "./redux-reducer/City-reducer"
import Citylistreducer from "./redux-reducer/Citylist-reducer"
 import Tabbarreducer from "./redux-reducer/Tabbar-reducer"
 import reduxThunk from "redux-thunk"
 import reduxPromise from "redux-promise"

const persistConfig = {
  key: 'localstore',
  storage,
  whitelist: ['Cityreducer']
  
}
const reducer=combineReducers({
    Tabbarreducer,Cityreducer,Citylistreducer
})
const persistedReducer = persistReducer(persistConfig, reducer)
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(reduxThunk,reduxPromise)))
let persistor = persistStore(store)
// const store =createStore(reducer,applyMiddleware(reduxThunk,reduxPromise))
export {store,persistor} 