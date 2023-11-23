import axios from 'axios';
import React, { useReducer } from 'react';
import { Link } from "react-router-dom";

const intialState={name:"", email:"",password:""}
function reducer(state,action){
    if(action.type==="name"){
        return{...state,name:action.payload}
    }
    else if(action.type==="email"){
        return{...state,email:action.payload}
    }
    else if(action.type==="password"){
        return{...state,password:action.payload}
    }
    else if(action.type==="clear-name"){
        return{...state,name:""}
    }
    else if(action.type==="clear-email"){
        return{...state,email:""}
    }
    else if(action.type==="clear-password"){
        return{...state,password:""}
    }
    else{
        return state
    }
}



const Signup = () => {
    const[state,dispatch]=useReducer(reducer,intialState);
    async function signUp(){
        try{
            const body= {name:state.name,email:state.email,password:state.password}
    const response=await axios.post("http://127.0.0.1:4000/api/users/signup",body)
    console.log(response.data)
    }catch(err){
        console.log(err)
    }
    }
    function clickHandler(e){
        e.preventDefault();
        signUp()
        dispatch({type:"clear-name"})
        dispatch({type:"clear-email"})
        dispatch({type:"clear-password"})
    }
    
    
    return (
        <main className="flex items-center justify-center h-screen bg-zinc-200 ">
            <div className="border-2 border-gray-300 bg-white p-4 w-96 shadow-md shadow-slate-600 rounded-xl">
                {/* from */}
                <form action="">
                    <h1 className=' font-bold pb-2 text-2xl tracking-wide text-center'>Signup</h1>
                    <div className='my-2'>
                        <p className=' text-zinc-700 font-semibold'>Name :</p>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter Full Name'
                            required
                            value={state.name}
                            className='border border-gray-400 p-2 w-full focus:outline-none'
                        onChange={(e)=>{
                            dispatch({type:"name",
                            payload:e.target.value})
                        }}/>
                        <p className=' text-zinc-700 font-semibold'>Email :</p>
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                            value={state.email}
                            placeholder='Enter your Email'
                            className='border border-gray-400 p-2 w-full focus:outline-none'

                       onChange={(e)=>{
                        dispatch({type:"email",
                         payload:e.target.value})
                       }} />
                    </div>
                    <div>
                        <p className=' text-zinc-700 font-semibold'> Create Password :</p>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter Password'
                            required
                            value={state.password}
                            autoComplete="Password"
                            className=' border border-gray-400 p-2 w-full focus:outline-none'
                       onChange={(e)=>{
                        dispatch({type:"password",
                        payload:e.target.value})
                       }} />
                        <p className=' text-zinc-700 font-semibold'> Confirm Password :</p>
                        <input
                            type="password"
                            name='confirmPassword'
                            placeholder='Enter Confirm Password'
                            value={state.password}
                            // required
                             autoComplete="confirmPassword"
                            className=' border border-gray-400 p-2 w-full focus:outline-none'
                           
                        />
                    </div>
                    <div className='flex pt-5 gap-5'>
                        <input
                            type="checkbox"
                            name="rememberMe"
                        />
                        <p className=' '>Remember me ?</p>
                    </div>

                    <div className="mt-4">
                        <button className="border border-gray-400 bg-blue-700 text-white px-20 p-2 text-xl rounded-full w-full " onClick={clickHandler}>
                            signup
                        </button>
                        <p className=' text-end'>Forgot Passowrd?</p>
                    </div>
                   
                    <p className=' text-center text-zinc-500'>Already have an account?<Link to="/Login"> <span className=' text-blue-800 font-semibold'>Login now</span> </Link></p>

                </form>



            </div>
        </main>
    );
};

export default Signup;
