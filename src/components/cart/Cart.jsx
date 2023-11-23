import React, { useEffect, useState } from 'react';
import { CartState } from '../context/Context';

const Cart = () => {
  const { state: { cart }, dispatch } = CartState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, cur) => acc + Number(cur.price) * cur.qty, 0)
    );
  }, [cart]);





  return (
    <div className="flex flex-col md:flex-row p-4">
      {/* Product List */}
      <div className="w-full md:w-2/3 pr-4">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        <div className="space-y-4">
          {cart.map((prod) => (
            <div key={prod.id} className="flex flex-col md:flex-row items-center border-b pb-4">
              <div className="flex items-center space-x-4">
                <img
                  src={prod.imageUrl}
                  alt={prod.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="text-lg font-semibold">{prod.title}</div>
              </div>
              <div className="flex items-center space-x-4 mt-2 md:mt-0">
                <div>
                  <span className='text-gray-600 px-5'>RS, {prod.price}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <select
                    value={prod.qty}
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_CART_QTY",
                        payload: {
                          id: prod.id,
                          qty: e.target.value
                        }
                      })}
                    className="block w-full mt-1 px-3 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    {[...Array(prod.id).keys()].map((x) => (
                      <option value={x + 1} key={x + 1}>{x + 1}</option>
                    ))}
                  </select>

                </div>
                <button
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                  className="text-red-600 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Total and Subtotal */}
      <div className="w-full md:w-1/3 border-t md:border-l pl-4 mt-4 md:mt-0">
        <h2 className="text-2xl font-semibold mb-4">Total</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Subtotal ({cart.length} items)</span>
            <span>RS, {total}</span>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Proceed to Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
