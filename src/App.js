import './App.css';

import { useContext, useEffect, useState } from 'react';
import { AppContext } from './context/AppContext';
import { Route, Routes, useLocation } from 'react-router';
import Home from './Routes/Home';
import Category from './Routes/Category';
import BlogPage from './Routes/BlogPage';
import Tag from './Routes/Tag';
import { useSearchParams } from 'react-router-dom';


function App() {

  const { fetchData } = useContext(AppContext);
  

  const [searchParams, setSearchParams] = useSearchParams();
  

  
  const location = useLocation();
  
  


  useEffect(() => {

    const page = searchParams.get("page") ?? 1 ;
    
    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("_" , " ")
      fetchData(Number(page) , tag)
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("_" , " ")
      fetchData(Number(page) , category)
    }
    else{
      fetchData(Number(page))
    }

    
    
    
    

  }, [location.pathname , location.search])


  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/blog/:blogId' element={<BlogPage />} />
      <Route path='/categories/:category' element={<Category />} />
      <Route path='/tags/:tag' element={<Tag />} />




    </Routes>
  );
}

export default App;
