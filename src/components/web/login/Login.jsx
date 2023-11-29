import React from 'react'
//import Input from '../pages/Input'
import Input from '../../pages/Input.jsx';
import axios from 'axios';
import { useFormik } from 'formik';
import { toast } from 'react-toastify'
import { loginSchema} from '../../web/validation/Validate.js'
import { useNavigate } from 'react-router-dom'

// file has no value so it requires special tactic
export default function Login({saveCurrentUser}) {
    const navigate = useNavigate();

   const initialValues={
     
        email:'',
        password:'',
    };
  
    const onSubmit = async users => {
        const {data} = await axios.post('https://ecommerce-node4.vercel.app/auth/signin',users);
        if(data.message === "success"){
            localStorage.setItem("userToken",data.token);
           saveCurrentUser();
           navigate('/home');
       
            toast('Account login Successfuly', {
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

    }
    const formik= useFormik({

        initialValues,
        onSubmit,
        validationSchema:loginSchema


    }) 

    const inputs =[


        {
            id:'email',
            type:'email',
            name:'email',
            title:'email',
            value:formik.values.email,

        },
   
        {
            id:'password',
            type:'password',
            name:'password',
            title:'user password ',
            value:formik.values.password,

        },               
            ];

            const renderInputs= inputs.map((input,index)=>
            <Input type={input.type} id={input.id} name={input.name} title={input.title} key={index} 
            
            errors={formik.errors}
            touched={formik.touched}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange} />
            )
  return (
  <>
  <div className='container'>
    <h2> login

    </h2>
    <form onSubmit={formik.handleSubmit} >

        {renderInputs}
<button type='submit' disabled={!formik.isValid}> login</button>   

 </form>

  </div>
  </>
  )
}
