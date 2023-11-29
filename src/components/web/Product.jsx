import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'

export default function Product() {
 const {productId} =useParams();
 const getProduct =async ()=> {
    const {data} =await axios.get(`${import.meta.env.Vite_API_URL}/products/${productId}`);
    return data.products;
 }
 const {data,isLoading} = useQuery('product',getProduct);
 if(isLoading){
    return <p>loadeer</p>
 }
  return (
 <div className="container">
<div className="row">
<div className="col-lg-4">
{data.subImages.map((img)=>
<div className="images mt-3">
<img src={img.secure_url} />
</div>

)}

</div>
<div className="col-lg-8">

    <h2> {data.name}</h2>
    <p> {data.price}</p>
</div>

</div>

 </div>
  )
}
