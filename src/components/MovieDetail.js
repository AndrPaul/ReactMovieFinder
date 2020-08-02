import React from 'react'
import ReactPlayer from 'react-player'
import BeautyStars from "beauty-stars";
const SomeStars = (vote) => (

    <BeautyStars
        value={Math.round(vote) / 2}
        maxStars={5}
        size='16px'
        inactiveColor='#697a85'
        editable={false}
    />
);
const checkBudget = budget => {
    if (budget === 0) {
        return "Not know"
    } else {
        return budget + " $"
    }
}
const checkWebsite = (website) => {
   
    if (website === "") {
   
        return alert('This movie does not have an official website')
    } else {
        return window.open(website, '_blank');;
    }
}
let getCategories = (cat) => {
    let categories = []
    cat.genres.forEach(genre => {
        categories.push(genre.name)
    })
    return categories.toString()
}

function MovieDetail({ selected, exitbutton, trailer }) {

    return (
        <div className="detail">
            <div className="movie-card">
                <div className="container">
                    <div className="poster">
                        <img src={'https://image.tmdb.org/t/p/w220_and_h330_face' + selected.poster_path} alt="cover" className="cover" />
                    </div>

                    <div className="hero" >
                        <div className="details">
                            <h1 className="title1">{selected.original_title} <span>({selected.original_language.toUpperCase()})</span></h1>
                            <h2 className="title2">Categories: {getCategories(selected)}</h2>

                            <div className="rating">
                                {SomeStars(selected.vote_average)}
                            </div>
                            <div className="likes">{selected.vote_count} Likes</div>

                        </div>
                    </div>
                    <div className="description">
                        <div className="col1">
                            
                            <h3>Released: </h3>
                            <p>{selected.release_date}</p>
                            <h3>Budget:</h3>
                            <p>{checkBudget(selected.budget)}</p>
                            <h3>Overview:</h3>
                            <p>{selected.overview}</p>
                            <button onClick={()=> (checkWebsite(selected.homepage))} >Website</button>
                        </div>
                        <div className="col2">
                            <h3>Trailer</h3>
                            <ReactPlayer width="70%" height="500px" url={trailer} playing={false} style={{ border: "2px solid white" }} />
                        </div>
                    </div>
                    <button onClick={() => exitbutton()} className="close" >X</button>
                </div>
            </div>
        </div>


    )
}

export default MovieDetail
