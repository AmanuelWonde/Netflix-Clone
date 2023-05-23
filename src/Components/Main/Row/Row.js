import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import './Row.css'
function Row({title,url,Name,rowLarge}) {
const[movies,setMovie] = useState([]);
const [trailerUrl, setTrailerUrl] = useState("")

useEffect(()=>{
fetch(url)
.then((res)=>res.json())
.then((data)=>{
let result = data.results;
// setresponse(data);
setMovie(result);
})
.catch((error)=>console.log(error))

},[url]);

//console.log(movies);


const handleClick = (movie) => {
  if(trailerUrl){
    setTrailerUrl("")
  }else {
    movieTrailer(movie?.title ||movie?.name||movie?.original_name)
    .then((url) => {
      // let k = fetchurl;
      console.log(url)
      const urlParams = new URLSearchParams(new URL(url).search)
      setTrailerUrl(urlParams.get('v'))
    })
    .catch((error) => console.log(error))
  }
}
const opts = {
  heighr: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
  }
}

  return (
   
    <div className="row">
   <h1>{title}</h1>
  <div className='movieWarraper'>
{movies.map((singleMovie)=>{
let mainGet = 'https://image.tmdb.org/t/p/original';
let img = singleMovie.poster_path;
let imgPath = mainGet + img;
    let oneMovie =(
<div className='wrapper' >
<img   key={singleMovie.id} onClick={() => handleClick(singleMovie)}  src={imgPath} className ={`${Name} ${rowLarge}`}  />

    </div>
    );

return oneMovie;
})}


</div>
<div style={{ padding: "40px"}}>
       {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
</div>
  )
}

export default Row