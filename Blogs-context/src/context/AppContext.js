import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";
// step-1 => context create krna
export const AppContext= createContext();

 export default function AppContextProvider({children}){
    const [loading,setLoading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);

    // data filling 
    async function fetchBlogPosts(page= 1 ) {
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result= await fetch(url);
            const data =await result.json();

            // ab variables ko set kr skte haii 
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        }
        catch(error){
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);

    }

    // ek function pages ko change krne ke liye 
    function handlePageChange(page) {
        setPage(page);
        fetchBlogPosts(page);
    }


    // yha value vo data haii jo hum consumer ko denge 
    const value={
        posts,
        setPosts,
        loading,
        setLoading,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    // step-2 => data provide krna 
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}