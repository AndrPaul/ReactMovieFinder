import React from 'react'
import noimage from '../images/noimage.png'

const checkPoster = poster =>{
    if(poster === null){
        return noimage
    }else{
        return 'https://image.tmdb.org/t/p/w220_and_h330_face'+ poster
    }
}

function MovieList({movielist,opendetail,videohandler}) {
    return (
        <div className="box">
          
             
            {
               movielist.map((movie,index)=>(
                   <div  key={movie.id} className="movieBox">
                       <button key={movie.id} className="button" onClick={()=>{
                      opendetail(movie.id) // get movie details
                      videohandler(movie.id) // get movie trailer youtube link
                  }}>
                  <img src={checkPoster(movie.poster_path)} alt="cover"/>
                  <div className="overlay">
                      <p className="text">🛈 Details</p>
                  </div>
                  </button>

                   </div>
                  
                ))
            }
            
            
        </div>
    )
}

export default MovieList
