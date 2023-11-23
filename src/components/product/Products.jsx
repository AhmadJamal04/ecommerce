import two from "../../assets/two.png"
import five from "../../assets/five.jpeg"
import seven from "../../assets/seven.jpeg"
import React, { useEffect, useState } from "react";
import { CartState } from "../context/Context";
import SinglePorduct from "./SinglePorduct";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);
  async function getProductsApi() {
    try {
      const response = await axios.get(
        "http://127.0.0.1:4000/api/users/products/products"
      );
      setProducts(response.data.allProducts.rows)
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getProductsApi();
    console.log(products)
  }, []);

  return (
    <div className="flex justify-center items-center px-6 pr-10 py-6">
      <div className=" grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  my-10 gap-10">
        {products.map((prod) => {
          return <SinglePorduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Products;
