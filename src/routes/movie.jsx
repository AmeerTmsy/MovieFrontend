import React from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader({params}){
    const respons = await fetch(`${import.meta.env.VITE_API_BASE_URL}/movies/${params.movieId}`)
    const movie = await respons.json()
    return {movie};
}

function Movie(props) {

    const { movie } = useLoaderData();

    return (
        <main className='container mx-auto'>
            <section className='py-10 grid grid-cols-2 gap-6 items-center'>
                <img src={movie.thumbnail} alt="" />
                <div>
                    <h2 className='text-3xl font-bold mb-3'>{movie.title}</h2>
                    <span>thiller</span>
                    <p className='mt-4 text-gray-600'>{movie.description}</p>
                </div>
            </section>
        </main>
    );
}

export default Movie;