import axios from "axios";
import React, { useState } from "react";
import { Card } from "../component/ui/Card.jsx";
import { use, useEffect } from "react";
export const Movie = () => {

const [data,setData]=useState([]);


    const API="https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";


   //const res= awaitaxios.get(API)
const getMovieData =async ()=> {
    try{
const res= await axios.get(API);
console.log(res.data.Search);
setData(res.data.Search);
    }catch(error){
        console.log(error);
        console.error("Error fetching movie data:", error.message);
        console.error("Please check your API key and network connection.",error.response.status);
        console.error("API response:", error.response.data);
        setData([]); // Clear data on error
    }
   };
useEffect(() => {
    getMovieData();
},[]);
    return (
        <container>
        <ul className="container grid grid-four--cols">
           {data.map((currentElement) => {
                return <Card key={currentElement.imdbID} movieData={currentElement} />;
            })}
        </ul>
        </container>

    );
};