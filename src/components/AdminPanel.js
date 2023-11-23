import React, { useEffect, useState } from 'react'
import AddProducts from './AddProducts'
import { Await, Navigate, useNavigate } from 'react-router'
import "./adminPanelStyles.css"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Navbar } from './navbar/Navbar'

export default function AdminPanel() {
  const{token,user}=useSelector((state)=> state)
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  async function deleteProduct( id ){

    try{
      // const headers = {
      //   Authorization:`Bearer ${token}`,
      //   'Content-Type': 'application/json'      
      // };
      const body={id};
     const res= await axios.post(`http://127.0.0.1:4000/api/users/${user.id}/products/delete`,body, {
        headers: {
            Authorization: token,  
        }
      });
      getProductsApi();
      console.log(res)

    }catch(err){
console.log(err)
navigate('/login')
    }
  }
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
  }, []);


  return (
<>
<Navbar/>
{/* <h1 className="text-2xl font-semibold mb-4">Welcome to admin dashboard</h1> */}
<div className='main'>
  <div className='upper-section'>
  <h2 className="text-2xl font-semibold mb-4">Products</h2>
  <button onClick={()=>{navigate("/addProduct");}}>Add Product</button>
  </div>
  <table id='customers'>
<thead>
  <tr style={{textAlign:"center", fontWeight:"bold" }}>
    <td>NAME</td>
    <td>INFO</td>
    <td style={{width:"200px"}}>PRICE</td>
    <td>ACTION</td>
  </tr>
</thead>
<tbody>
  {
    products.map((prod,index)=>{
      return <tr style={{textAlign:"justify", verticalAlign:"middle" }} key={index}>
        <td><img src={prod.imageUrl} alt="" /> <span style={{fontWeight:"bold"}}>{prod.title}</span> </td>
        <td><p>{prod.info}</p></td>
        <td><p>{prod.price}</p></td>
        <td>
        <i class="fa-solid fa-trash-can" onClick={(e)=>{
           
            deleteProduct(prod.id);
            
        }} title='delete this product'></i>
        <i class="fa-regular fa-pen-to-square" onClick={()=>{
         navigate("/EditProduct",{state:prod})
        }} title='update this product'></i>
        </td>
      </tr>
      
    })
  }
</tbody>
  </table>
</div>

      {/* <AddProducts></AddProducts> */}
      
      </>
  )
}
