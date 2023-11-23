import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router'




const initialState={id:"",title:"",description:"",info:"",price:"",imgUrl:""}
function reducer(state,action){
    if(action.type==="ID"){
        return {...state, id:action.payload}
    }
    else if (action.type==="TITLE"){
        return{...state,title:action.payload}
    }
    else if (action.type==="DESCRIPTION"){
        return{...state,description:action.payload}
    }
    else if (action.type==="INFO"){
        return{...state,info:action.payload}
    }
    else if (action.type==="PRICE"){
        return{...state,price:action.payload}
    }
    else if(action.type==="IMGURL"){
        return{...state,imgUrl:action.payload}
    }
    else{
        return state
    }
}

export default function EditProduct()
{   const location= useLocation();
    const  product  = location.state || {};
    console.log("product",product)
    const navigate=useNavigate();
    const{token,user}=useSelector((state)=>state);
    const[state,dispatch]=useReducer(reducer,initialState);
    async function editProduct(){
            try{
            const body={id:product.id, title:state.title, description:state.description,info:state.info,price:state.price, imageUrl:state.imgUrl }
              const res= await axios.put(`http://127.0.0.1:4000/api/users/${user.id}/products/update`,body, {
                headers: {
                    Authorization: token,
                }
              })
              console.log(res);
              navigate("/dashboard")
            }catch(err){
                console.log(err)
            }
        }
    
 useEffect(()=>{
    dispatch({type:"TITLE",
    payload:product.title})

    dispatch({type:"DESCRIPTION",
    payload:product.description})

    dispatch({type:"INFO",
    payload:product.info})

    dispatch({type:"PRICE",
    payload:product.price})

    dispatch({type:"IMGURL",
    payload:product.imageUrl})
   },[])
    function clickHandler(e){
e.preventDefault();
editProduct();
    }

  return (
    <>
      <main className="flex items-center justify-center h-screen bg-zinc-200 ">
          
          <div className="border-2 border-gray-300 bg-white p-4 w-96 shadow-md shadow-slate-600 rounded-xl">
              {/* from */}
              <form action="">
                  <h1 className=' font-bold pb-2 text-2xl tracking-wide text-center'>Update Product</h1>
                  
                  <div>
                      <p className=' text-zinc-700 font-semibold'>Title :</p>
                      <input
                        name='productTitle'               
                          type="text"
                          placeholder='Enter product title'
                          className=' border border-gray-400 p-2 w-full focus:outline-none'
                          required
                          onChange={(e)=>{
                              dispatch({type:"TITLE",
                              payload:e.target.value})
                             }}
                             value={state.title}

                      />
                 </div>
                 <div>
                 <p className=' text-zinc-700 font-semibold'>description :</p>
                      <input
                      name='productDescription'
                          type="text"
                          placeholder='Enter product description'
                          className=' border border-gray-400 p-2 w-full focus:outline-none'
                          required
                          onChange={(e)=>{
                              dispatch({type:"DESCRIPTION",
                              payload:e.target.value})
                             }}
                             value={state.description}

                      />
                 </div>
                 <div>
                      <p className=' text-zinc-700 font-semibold'>Info :</p>
                      <input
                      name='productsInfo'
                          type="text"
                          placeholder='Enter product info'
                          className=' border border-gray-400 p-2 w-full focus:outline-none'
                          required
                          onChange={(e)=>{
                              dispatch({type:"INFO",
                              payload:e.target.value})
                             }}
                             value={state.info}

                      />
                 </div>
                 <div>
                      <p className=' text-zinc-700 font-semibold'>Price :</p>
                      <input
                      name='productPrice'
                          type="number"
                          placeholder='Enter product price'
                          className=' border border-gray-400 p-2 w-full focus:outline-none'
                          required
                          onChange={(e)=>{
                              dispatch({type:"PRICE",
                              payload:e.target.value})
                             }}
                             value={state.price}

                      />
                 </div>
                 <div>
                      <p className=' text-zinc-700 font-semibold'>ImageUrl :</p>
                      <input
                      name='productImageUrl'
                          type="text"
                          placeholder='Enter product imgurl'
                          className=' border border-gray-400 p-2 w-full focus:outline-none'
                          required
                          onChange={(e)=>{
                              dispatch({type:"IMGURL",
                              payload:e.target.value})
                             }}
                             value={state.imgUrl}

                      />
                 </div>
                  <div className="mt-4">
                      <button className="border border-gray-400 bg-blue-700 text-white px-20 p-2 text-xl rounded-full w-full " onClick={clickHandler}>
                          Update Product
                      </button>
                     
                  </div>
                  
              </form>


          </div>
      </main>
      </>
  )

                            }