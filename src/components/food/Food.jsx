import { useState } from "react"
import { data } from "../category/data";

const Food = () => {
    const [foods, setFoods] = useState(data);

    // Filter types like burger , pizza chicken etc 
    // take a function for filtering and pass category of json data
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category
            }))
    };

    // Filter by price 
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price ;
            })
        )
    }

    return (
        <section className=' max-w-[1640] m-auto  px-4 py-12'>
             <h1 className=' text-orange-600 font-bold text-4xl text-center py-8'>
                Top Rated Manu Items
             </h1> 

                {/* Filter types */}
                <div className=" flex justify-between items-center text-sm">
                    <div>
                    <p className=' font-bold text-gray-700'>Filter Type</p>

                        <button
                            onClick={() => setFoods(data)}
                            className='sm:m-1 border border-orange-600 text-orange-600 rounded-xl  sm:p-1  hover:bg-orange-600 hover:text-white '>
                            All
                        </button>
                        <button
                            onClick={() => filterType("Burger")}
                            className='sm:m-1 border border-orange-600 text-orange-600 rounded-xl sm:p-1 hover:bg-orange-600 hover:text-white'>
                            Burgers
                        </button>
                        <button
                            onClick={() => filterType("pizza")}
                            className=' sm:m-1 border border-orange-600 text-orange-600 rounded-xl p-[0.5px] sm:p-1 hover:bg-orange-600 hover:text-white '>
                            Pizza
                        </button>
                        <button
                            onClick={() => filterType("salads")}
                            className=' sm:m-1 border border-orange-600 text-orange-600 rounded-xl p-[0.5px] sm:p-1 hover:bg-orange-600 hover:text-white '>
                            Salads
                        </button>
                        <button
                            onClick={() =>
                                filterType("chicken")}
                            className=' sm:m-1 border border-orange-600 text-orange-600 rounded-xl p-[0.5px] sm:p-1 hover:bg-orange-600 hover:text-white '>
                            Chicken
                        </button>
                    </div>

                    {/* FILTER BY PRICE */}
                    <div>
                    <p className=' font-bold text-gray-700'>Filter Price</p>
                        <button
                            onClick={() => filterPrice("$")}
                            className=' sm:m-1 border border-orange-600 text-orange-600 rounded-xl p-1 hover:bg-orange-600 hover:text-white '
                        >
                            $
                        </button>
                        <button
                            onClick={() => filterPrice("$$")}
                            className=' sm:m-1 border border-orange-600 text-orange-600 rounded-xl p-1 hover:bg-orange-600 hover:text-white '
                        >
                            $$
                        </button>
                        <button
                            onClick={() => filterPrice("$$$")}
                            className=' sm:m-1 border border-orange-600 text-orange-600 rounded-xl p-1 hover:bg-orange-600 hover:text-white '
                        >
                            $$$
                        </button>
                        <button
                            onClick={() => filterPrice("$$$$")}
                            className=' sm:m-1 border border-orange-600 text-orange-600 rounded-xl p-1 hover:bg-orange-600 hover:text-white '
                        >
                            $$$$
                        </button>
                    </div>
                </div>
           


             <div className=" grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
                {
                    foods.map((item, index) => (
                        <div
                            key={index}
                            className="border shadow-lg rounded-md hover:scale-105 duration-300 "
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className=" pl-10 md:pl-16 md:w-60 rounded-t-l"
                            />
                            <div className=" flex justify-between px-2 py-4">
                                <p className=" font-bold ">{item.name}</p>
                                <p>
                                    <span className=" bg-orange-500 text-white p-1 rounded-full">
                                        {item.price}
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Food