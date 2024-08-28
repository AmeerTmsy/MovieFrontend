import React, { useRef } from 'react';
import MovieCard from './components/movieCard';
import { useLoaderData, useNavigate } from 'react-router-dom';

export async function loader({request}){
    // Get the base URL
    const url = new URL(request.url)
    // Extract query parameters from the URL
    const language = url.searchParams.get('language');
    const sort = url.searchParams.get('sort');
    const limit = url.searchParams.get('limit');
    const select = url.searchParams.get('select');
    const genre = url.searchParams.get('genre');
    const rating = url.searchParams.get('rating');

    // Construct the query string
    const queryParams = new URLSearchParams();

    if (language) queryParams.append('language', language);
    if (sort) queryParams.append('sort', sort);
    if (limit) queryParams.append('limit', limit);
    if (select) queryParams.append('select', select);
    if (genre) queryParams.append('genre', genre);
    if (rating) queryParams.append('rating', rating);

    // Construct the full URL with the query string
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/movies?${queryParams.toString()}`;

    // Fetch data from the backend
    const response = await fetch(apiUrl);
    const movies = await response.json();
    console.log(movies)
    return { movies }
}

function Home(props) {
    const { movies } = useLoaderData()
    const navigate = useNavigate()

    const languageRef = useRef()

    function languageChange(){
        const language = languageRef.current.value
        navigate(`/?language=${language}`)
    }


    return (
        <main>
            <section className='container mx-auto py-16'>
                <header className='flex flex-row justify-between items-center'>
                    <h2 className='font-bold text-3xl'>Now Showing...</h2>
                    <div>
                        <select ref={languageRef} onChange={languageChange} name="language" id="language">
                            <option value="">Language</option>
                            <option value="english">English</option>
                            <option value="malayalam">Malayalam</option>
                            <option value="tamil">Tamil</option>
                            <option value="telugu">Telugu</option>
                            <option value="hindi">Hindi</option>
                        </select>
                    </div>
                </header>
                <div className='mt-8 grid grid-cols-4 gap-3'>
                {
                    movies.map(movie => {
                        // console.log(movie)
                        return <MovieCard 
                        key={movie._id}
                        movie={movie}/>
                    })
                }
                </div>
            </section>
        </main>
    );
}

export default Home;