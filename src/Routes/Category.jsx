import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router'
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

export default function Category() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const category = location.pathname.split('/').at(-1);
  console.log(category)
  
  return (
    <div  className='flex flex-col justify-center items-center '>
      <header></header>
      <div>

        <button className='border-2 rounded-md mt-[80px]'
        onClick={() => navigate(-1)}
        >Back</button>
      </div>

      <h2>Blogs On <span>{category}</span></h2>

      <Blogs/>
      <Footer></Footer>
      
    </div>
  )
}
