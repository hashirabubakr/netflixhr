import React, { useEffect, useState } from 'react'
import instance from '../instance'
import './Banner.css'

function Banner({fetchURL}) {
    console.log(fetchURL);
    const [movie,setMovie]=useState()
    const base_url="https://image.tmdb.org/t/p/original/"
    const fetchData = async()=>{
const{data}= await instance.get(fetchURL)
console.log(data.results);
setMovie(data.results[Math.floor(Math.random()*data.results.length)])
/* console.log(data.results); */
/* console.log(setMovie.results); */
 console.log(movie); 
    }
    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div style={{height:'600px',backgroundImage:`url(${base_url}${movie?.backdrop_path})`,backgroundSize:'cover',backgroundAttachment:'fixed'}}>
      <div className="banner-content">
        <h1>{movie?.name}</h1>
        <button className='btn btn-danger me-3'>Play <i style={{background:'transparent'}} class="fa-solid fa-play"></i></button>
        <button className='btn btn-outline-light' >More info <i style={{background:'transparent'}} class="fa-solid fa-caret-down"></i></button>
        <h2>{movie?.overview.slice(0,200)}...</h2>
      </div>
    </div>
  )
}

export default Banner