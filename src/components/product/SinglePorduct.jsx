import React, { useState } from 'react'
import { BiShow } from "react-icons/bi"
import { CartState } from '../context/Context';
import { AiOutlineClose } from "react-icons/ai"

const SinglePorduct = ({ prod }) => {
    const { state: { cart }, dispatch } = CartState()

    const [detail, setDetail] = useState([]);
    const DetailedPage = (Product) => {
        setDetail([{ ...Product }])
        setClose(true)
    }
    const [close, setClose] = useState(false);

    return (
        <main>

            {/* Detail page section when we check the detail of product  */}

            {
                close ? <div className='absolute sm:top-[525px] lg:right-10 sm:right-6 right-7 lg:w-[900px]
                 md:w-[700px] sm:w-[600px] w-[320px] bg-white ml-32 mt-52 z-10 items-center
                  shadow-sm shadow-slate-900 border border-white rounded-lg px-10 sm:py-10'>
                    <div className=' max-w-full'>
                        <button onClick={() => setClose(false)} >
                            <AiOutlineClose size={30}
                                className=' absolute right-5 top-5' /> </button>
                        {
                            detail.map((x) => {
                                return (
                                    <>
                                        <div className=' sm:flex  '>
                                            <div className='  w-[200px] h-[150px] '>
                                                <img
                                                    src={prod.imageUrl}
                                                    alt={prod.title}
                                                />
                                            </div>
                                            <div className=' ml-10  pt-10'>
                                                <h1 className=' sm:text-3xl font-bold'> {prod.title}</h1>
                                                <h1 className=' text-gray-800  font-semibold'> {prod.description}</h1>
                                                <p className=' text-gray-600 text-sm'>{prod.info}</p>
                                                <h1 className=' text-green-500 font-bold text-xl sm:text-2xl'> RS, {prod.price}</h1>
                                                {
                                                    cart.some((p) => p.id === prod.id) ? (
                                                        <button
                                                            onClick={() =>
                                                                dispatch({
                                                                    type: "REMOVE_FROM_CART",
                                                                    payload: prod,
                                                                })}
                                                            className=' bg-red-500 p-2 rounded-lg border  my-5 font-semibold'>
                                                            Remove from cart
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() =>
                                                                dispatch({
                                                                    type: "ADD_TO_CART",
                                                                    payload: prod,
                                                                })}
                                                            className=' bg-green-500 p-2 rounded-lg border  my-5 font-semibold'>
                                                            Add to cart
                                                        </button>
                                                    )
                                                }
                                            </div>
                                        </div >
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                    : null
            }

            {/* Detail page section when we check the detail of product closed here  */}


            
            {/* all products sections which is  design here  */}
            
            <div className='w-80 h-96 bg-white border rounded-lg shadow-md overflow-hidden hover:cursor-pointer'>
                <img src={prod.imageUrl}
                    alt={prod.title}
                    className='w-full h-60 object-cover'
                />
                <div className='p-4'>
                    <p className='text-gray-800 font-semibold text-xl'>{prod.title}</p>
                    <p className='text-gray-500 text-sm'>{prod.description}</p>
                </div>
                <div className='flex justify-between items-center mt-2'>
                    <p className='text-green-600 text-lg font-semibold pl-3'>RS, {prod.price}</p>
                    <div className='flex space-x-2 pr-2'>

                        <button className='bg-gray-200 rounded-full p-2 hover:scale-105'>
                            <BiShow onClick={() => DetailedPage()} size={25} className='text-gray-700' />
                        </button>

                        {
                            cart.some((p) => p.id === prod.id) ? (
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: prod,
                                        })}
                                    className=' bg-red-500 p-2 rounded-lg border hover:scale-105 font-semibold'>
                                    Remove from cart
                                </button>
                            ) : (
                                <button
                                    onClick={() =>
                                        dispatch({
                                            type: "ADD_TO_CART",
                                            payload: prod,
                                        })}
                                    className='  bg-green-500 p-2 rounded-lg border hover:scale-105 font-semibold'>
                                    Add to cart
                                </button>
                            )
                        }



                    </div>
                </div>
            </div>
        </main >
    )
}

export default SinglePorduct