import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate, useNavigation } from 'react-router'
import Blogs from '../components/Blogs';
import Footer from '../components/Footer';

const Tag = () => {
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
  console.log(tag)
  const navigate = useNavigate();
  return (
    <div  className='flex flex-col justify-center items-center '>
      <Header></Header>

      <div>

      <button
      className='border-2 rounded-md mt-[80px]'
      onClick={() => navigate(-1)}
      >Back</button>
      </div>

      <h2>BLogs Tags <span>{tag}</span></h2>


      <Blogs/>
      <Footer/>
    </div>
  )
}

export default Tag
