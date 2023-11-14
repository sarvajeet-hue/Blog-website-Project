import { createContext, useState } from "react";
import { baseUrl } from "../baseurl";
import { useNavigate } from "react-router";

export const AppContext = createContext();



export function AppContextProvider({ children }) {
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null)
    const [posts, setPosts] = useState([])
    const navigate = useNavigate()
    
    


    async function fetchData(page = 1 , tag = null , category) {
        console.log(tag , "ye hai mera tag")
        setLoading(true);
        
        
        let url = `${baseUrl}?page=${page}`;
        if(tag) {
            url += `&tag=${tag}`;
        }
        else if(category) {
            url += `&category=${category}`
        }
        try {
            const result = await fetch(url)
            const output = await result.json();
            if(!output.posts || output.posts.length === 0 ){
                alert("something Went Wrong")
            }
            console.log("api response" , output)
            setPosts(output.posts)
            setLoading(false);
            setPage(output.page)
            setTotalPages(output.totalPages)
        }
        catch (error) {

        }
    }
     
    function handlerOnChange(page) {
        setPage(page)
        console.log(page)
        navigate({search : `?page=${page}`})
        
        fetchData(page);
        
    }

   


    const value = {

        loading, page, totalPages, posts, setLoading, setPage, setPosts, setTotalPages , fetchData , AppContextProvider , handlerOnChange
    }

    return <AppContext.Provider value={value} >
        {children}
    </AppContext.Provider>


}


