import React, { useEffect, useState } from 'react'
import './Banner.css'
import img from '../resource/tegene.jpg'
function Banner() {
const[movie,setMovie] = useState({});


useEffect(()=>{
 fetch('https://api.themoviedb.org/3//discover/tv?api_key=b56854446dc53ef102d4fe7d1608bce1&with_networks=213')
.then((res)=>res.json())
.then((data)=>{
let singleMovie = data.results[ Math.floor(Math.random() * data.results.length)];
setMovie(singleMovie);

})
},[])

console.log(movie) 
let mainGet = 'https://image.tmdb.org/t/p/original';
let path = movie.backdrop_path;

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
  return (
    <div className='bannerWrapper' style={{
      backgroundImage:`url("${mainGet}${ path}")`,
      backgroundSize: "cover",
      backgroundPosition: "center center"
   
     }}>
      
  
       <div className='wrapper2'>
<h2>{movie?.title || movie?.name || movie.original_name}</h2>
<button>Play</button>
<button>My list</button>
<div className='dis'>{truncate(movie.overview,150)}</div>
</div>
<div className="banner__fadeBottom" />
      </div>
  )      
}

export default Banner;