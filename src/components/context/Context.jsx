import { createContext, useContext, useReducer } from "react";
import { ProductData } from "../product/ProductData";
import {cartReducer} from "./Reducers"



const Cart = createContext()

const Context = ({ children }) => {
  const products = [...ProductData].map((x) => ({
    id: x.id,
    title: x.title,
    description: x.description,
    info : x.info,
    imageUrl: x.imageUrl,
    price: x.price
  }));

   const [state , dispatch] = useReducer(cartReducer,{
    products:[],
    cart:[],

   });
  return (
    <Cart.Provider value={{state , dispatch}}>{children}</Cart.Provider>
  )
}

export default Context

export const CartState  = () => {
  return useContext(Cart);
};