import React from 'react'
import MovieList from './MovieList'

function Search({handleInput,moviesearch, movielist, opendetail,videohandler}) {
    return (
        <div>
            <section className="searchbox-wrap">
                <input type="text"
                placeholder="Enter a keyword" className="searchbox"
                onChange={handleInput}
                onKeyPress={moviesearch}
                />
            </section>
            <MovieList movielist={movielist} opendetail={opendetail} videohandler={videohandler}/>
        </div>
    )
}

export default Search
