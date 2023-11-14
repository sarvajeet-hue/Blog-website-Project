import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import Card from './Card';


const Blogs = () => {

  const { loading, posts } = useContext(AppContext);
  console.log(posts)

  return (
    <div className='w-11/12 max-w-[500px] flex flex-col justify-center items-center mt-[70px]' >
      {
        loading ? (<Spinner />) :

          (

            posts.length === 0 ? (<div> Page Not found</div>) :

              (posts.map((post) => {
                return <Card key={post.id} post = {post}/>
              })

              )
          )
      }
    </div>
  )
}

export default Blogs

