import axios from 'axios';
import React ,{useContext} from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/Cart';

export default function Product() {
 const {productId} =useParams();
 const {addToCartContext}= useContext(CartContext);
 console.log(productId)
 const getProduct =async ()=> {
    const {data} =await axios.get(`${import.meta.env.Vite_API_URL}/products/${productId}`);
    return data.products;
 }
 const {data,isLoading} = useQuery('product',getProduct);

 const addToCart = async (productId) => {
   const res = await addToCartContext(productId);
   console.log(res);}

   //console.log(productId)}

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
    <button className='btn btn-outline-info' onClick={()=>addToCart(data._id)}> Add to Cart </button>
</div>

</div>

 </div>
  )
}
