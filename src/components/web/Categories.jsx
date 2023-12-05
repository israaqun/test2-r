import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CartContext } from '../../context/Cart';
function Categories() {
  console.log(import.meta.env.VITE_URL_API)

  const getCategories = async() => {
    const {data} = await axios.get (`${import.meta.env.VITE_URL_API}/categories`);
    return data;
  }

  //const x = useContext(CartContext);
  //console.log(x);
  const {data,isLoading} = useQuery('web_categories',getCategories);
  if (isLoading){
    return <p> loading....</p>
  }

  return (

    <div className="container">
  <Swiper
      spaceBetween={50}
      slidesPerView={6.3}
      navigation
      autoplay={{
        delay:3000
      }}
      pagination={{ clickable: true,
        el:'.swiper-custom-pagination'
      
      }}
    loop={true}

      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
   
   {data?.categories.length ? data?.categories.map((category) => 
         <SwiperSlide  key={category._id}>
<Link to={`/products/category/${category._id}`}/>

<div className="col-lg-4">

<img src={category.image.secure_url} />

<h2>{category.name}</h2>
</div>
</SwiperSlide>

): '<h2>no category found</h2>'}



    </Swiper>

    </div>
  )
 
}

export default Categories