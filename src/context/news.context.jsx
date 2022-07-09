import React,{ createContext, useEffect, useState } from 'react'
import axios from 'axios';

//initialize Context
export const NewsContext = createContext();

// Set the Provider
export const NewsProvider = (props) => {
    const [data, setData] = useState();
    const apikey = '26f86024e2b249a19121a1b82f89c37d';
    const url = `https://newsapi.org/v2/everything?q=flamengo&apiKey=${apikey}`;

    useEffect(()=>{
        axios.get(url)
        .then(response => setData(response.data))
        .catch(error => console.log(error));
    },[]);

    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    )

}