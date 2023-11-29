import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom'

export default function CategoryDetails() {
 const {categoryId} =useParams();
 const getCategoryDetails =async ()=> {
    const {data} =await axios.get(`${import.meta.env.Vite_API_URL}/products/category/${categoryId}`);
    return data.products;
 }
 const {data,isLoading} = useQuery('categoryDetails',getCategoryDetails);
 if(isLoading){
    return <p>loadeer</p>
 }
  return (
 <div className="products">

{data.length?data.map((products)=>

<div className="product" key={products._id}>
<img src={ products.mainImage.secure_url} />
<h2> {products.name}</h2>

<Link> </Link>
</div>
):<h2> no product</h2>}







 </div>
  )
}
