import React from 'react'
import { data } from "./data"

const Category = () => {
    return (
        <div>
            <h1 className=' text-orange-600 font-bold text-4xl text-center py-3'>
                Manu Items
            </h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-6 px-2'>
                {
                    data.map((item, index) => (
                        <div
                            key={index}
                            className=' bg-gray-200 rounded-lg sm:p-4 flex justify-between items-center pl-2'
                        >
                            <h1 className=' font-bold  text-sm md:text-lg'>{item.name}</h1>
                            <img src={item.image} alt={item.name} className=' w-20' />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Category