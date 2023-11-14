import React from 'react'
import Blogs from '../components/Blogs'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => {
  
  return (
    <div className='flex flex-col justify-center items-center '>
      <Header/>
      <Blogs/>
      <Footer/>
    </div>
  )
}

export default Home
