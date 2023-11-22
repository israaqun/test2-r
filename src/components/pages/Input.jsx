import React from 'react'

export default function Input({type='text',id,name,title ,value,onChange,errors,touched,onBlur}) {
  return (
  <>
  <div className='input-group mb-3'> 
<label htmlFor={id}>{title}</label>
<input type={type} name={name} className='form-control' value={value} id={id} onChange={onChange} onBlur={onBlur} />

{errors[name] && touched[name] ? <p className='text text-danger'> {errors[name]}</p> :null}
  </div>
  </>
  )
}
