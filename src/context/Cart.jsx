import axios from "axios";
import {  createContext ,useState} from "react";
import { toast } from 'react-toastify'

export const CartContext= createContext(null);

export function CartContextProvider({children}){

    const addToCartContext =async (productId) => {

        try{
          //  return productId
const token = localStorage.getItem('userToken');
const {data} = await axios.post(`${import.meta.env.Vite_API_URL}/cart`,
{productId},
{headers:{Authorization:`Tariq__${token}`}}

)
if(data.message=='success'){
    toast('Product Added Successfuly', {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
}
return data;
        }
        catch(error){
            console.log(error);}}
   // let [count,setCount] =useState(0);

    return <CartContext.Provider value={{addToCartContext}}>
{children}

    </CartContext.Provider>

}