import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { AppContext } from '../context/AppContext'
import { useLocation, useNavigate } from 'react-router'
import { baseUrl } from '../baseurl'
import Blogdetails from '../components/Blogdetails'

const BlogPage = () => {
  const navigate = useNavigate();
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
  const { loading, setLoading } = useContext(AppContext);
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const location = useLocation();

  const blogId = location.pathname.split("/").at(-1);

  async function fetchBlogPage() {

    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log(url)
    console.log(blogId);

    try {
      console.log("yaha tk chala")
      const res = await fetch(url)
      const output = await res.json();
      console.log(output)
      setLoading(false)
      setBlog(output.blog)
      setRelatedBlogs(output.relatedBlogs)

    }
    catch (error) {
      alert('data nhi aaya ')
    }

  }


  useEffect(() => {
    if (blogId) {
      fetchBlogPage();
    }
  }, [location.pathname])

  return (
    <div className='flex justify-center items-center'>
      <Header />

      <div>
        <button className='border rounder-md mt-[80px]' onClick={() => navigate(-1)}>Back</button>
      </div>


      {
        loading ? (<p>Loading...</p>) : (blog ? (<div>

          <Blogdetails post={blog} />
          <h2>RelatedBLogs</h2>
          <div>
            {
              relatedBlogs.map((post) => (<Blogdetails post ={post}/>))
            }
          </div>


        </div>) : (<div>No Blogs Find</div>))
      }

    </div>
  )
}

export default BlogPage
