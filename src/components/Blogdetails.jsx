import React from 'react'
import { NavLink } from 'react-router-dom'

const Blogdetails = ({ post }) => {
  return (

    <div className='w-11/12 max-w-[500px] flex flex-col justify-center items-center mt-[70px]' >
      <p className='font-bold text-lg'> <NavLink to={`/blog/${post.id}`}><span>{post.title}</span></NavLink></p>
      <p>By <span>{post.author}</span>  on {" "} <NavLink to={`/categories/${post.category}`}>{post.category.replaceAll(" " ,"-")}</NavLink></p>

      <p> Posted On{post.date}</p>
      
      <p>{post.content}</p>

      <div className='flex gap-1'>
        {
          post.tags.map((tag , index) => {
            return <span className='text-sm font-bold text-blue-500'><NavLink  key={index} to={`/tags/${tag}`}>{`#${tag}`}</NavLink></span>
          })
        }
      </div>

    </div>
  )
}

export default Blogdetails
