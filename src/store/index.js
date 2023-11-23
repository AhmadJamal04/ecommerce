import { createStore } from "redux";

const initialState={
    
    token:"",
    user:""
}

function rootReducer(state,action){
    if(action.type==="LOGIN"){
        return{...state,token:action.payload.token,user:action.payload.user}
    }
    else if(action.type==="logout"){
        return{...state,isloggedIn:false}
    }
    else{
        return state ;
    }

}
const store= createStore(rootReducer,initialState)
export default store