import React from 'react'
import Input from '../pages/Input'
import axios from 'axios';
import { useFormik } from 'formik';
import { toast } from 'react-toastify'

import { registerSchema } from '../web/validation/Validate';
// file has no value so it requires special tactic
export default function Register() {
   const initialValues={
        userName:'',
        email:'',
        password:'',
    };
    const handelFieldChange=(event) => {
        formik.setFieldValue('image',event.target.files[0]);}

 /*   const inputs =[

{
    id:'username',
    type:'text',
    name:'userName',
    title:'user name ',
},
{
    id:'password',
    type:'password',
    name:'password',
    title:'user password ',
},
  
     
        
    ];
    const renderInputs= inputs.map((input,index)=>
    <Input type={input.type} id={input.id} name={input.name} title={input.title} key={index} />
    )*/
    const onSubmit= async users =>{
        const formData =new FormData();
        formData.append('userName',users.userName);
        formData.append('email',users.email);
        formData.append('password',users.password);
        formData.append('image',users.image);

        const{data}= await axios.post('https://ecommerce-node4.vercel.app/auth/signup',formData);


        if(data.message === "success"){
            formik.resetForm();
            toast('Account Created Successfuly, plz verify your email to login', {
                position: "bottom-center",
                autoClose: false,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        
    }
    };
    const formik= useFormik({

        initialValues,
        onSubmit,
        validationSchema:registerSchema

/*


initialValues:{
    userName:'',
    email:'',
    password:'',
}, */
/*
onSubmit:values=>{
    console.log(values)
},*/
/*
validate:values=>{

   let errors={};
   if(!values.userName){
    errors.userName='userName is required'
   } 
   if(!values.email){
    errors.email='email is required'
   } 
   if(!values.password){
    errors.password='password is required'
   } 
   return errors;
}
*/

    }) 

    const inputs =[

        {
            id:'username',
            type:'text',
            name:'userName',
            title:'user name ',
            value:formik.values.userName,
        },

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
        {
            id:'image',
            type:'file',
            name:'image',
            title:'user image ',
            onChange:handelFieldChange,

        },
          
             
                
            ];

            const renderInputs= inputs.map((input,index)=>
            <Input type={input.type} id={input.id} name={input.name} title={input.title} key={index} 
            
            errors={formik.errors}
            touched={formik.touched}
            onBlur={formik.handleBlur}
            onChange={input.onChange || formik.handleChange} />
            )
  return (
  <>
  <div className='container'>
    <h2> create contact

    </h2>
    <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>

        {renderInputs}
<button type='submit' disabled={!formik.isValid}> register</button>   

 </form>

  </div>
  </>
  )
}
