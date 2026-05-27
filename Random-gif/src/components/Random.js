import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    // const [gif,setGif]=useState('');
    // const[loading,setLoading]=useState('false')

    // async function fetchData() {
    //     setLoading(true);
    //     const url =`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    //     const {data}= await axios.get(url);
    //     // yhi pe hum seedha data nikal rhe haii 
    //     // iske bad path ke hisab se data ke andr image tak jayenge
    //     const imageSource=data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
     
    // }

    // useEffect( ()=>{
    //     fetchData();
    // },[])

    const {gif , loading, fetchData}=useGif();


  return (
    <div className='w-1/2  bg-green-500 rounded-lg border border-black
    flex flex-col items-center gap-y-5 mt-[15px] '>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold '>a Random Gif</h1>

        {
            loading? (<Spinner/>):( <img key={gif} src={gif} alt='gif' width="450"/>)
        }
       
        <button onClick={()=> fetchData()}
        className='w-10/12  bg-white text-lg py-2 rounded-lg mb-[20px]'>
            Generate
        </button>
    </div>
  )
}

export default Random