import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard(props) {
    const movie = props.movie
    return (
        <article>
            <Link to={`/movies/${movie._id}`}>
            <img className='aspect-[3/4] object-cover w-fill' 
            src={movie.thumbnail} 
            alt="" />
            </Link>
            <h3 className='text-lg font-bold'>{movie.title}</h3>
            <span>Biography</span>
        </article>
    );
}

export default MovieCard;