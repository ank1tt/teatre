import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Define the Movie component
function Movie({ movie }) {
    return (
        <div>
            <h2>{movie.movieTitle}</h2>
            <img src={movie.img} alt={movie.movieTitle} style={{ width: '100%', height: '300px', objectFit: 'contain' }} />
        </div>
    );
}

// Fetch movies from your Spring Boot backend
async function getMovies() {
    const response = await axios.get('http://localhost:8080/admin/get-all-movies');
    return response.data;
}

function HomePage() {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const moviesPerPage = 6;

    useEffect(() => {
        getMovies().then(setMovies);
    }, []);

    // Filter the movies based on the search term
    const filteredMovies = movies.filter(movie => movie.movieTitle.toLowerCase().includes(searchTerm.toLowerCase()));

    // Calculate the index of the first and last movie on the current page
    const indexOfLastMovie = currentPage * moviesPerPage;
    const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;

    // Get the movies for the current page
    const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

    return (
        <div style={{ backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between' , alignItems: 'center'}}>
                <h1 style={{ color: 'cyan', fontFamily: 'monospace, sans-serif'}}>teatre</h1>
                <div>
                <Link to="/home" style={{ color: 'white', fontWeight: 'bold', marginRight: '20px' }}>Home</Link>
    <Link to="/login" style={{ color: 'white', fontWeight: 'bold', marginRight: '20px' }}>Login</Link>
    <Link to="/register" style={{ color: 'white', fontWeight: 'bold' }}>Register</Link>
                </div>
            </nav>

            <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search movies..." style={{ backgroundColor: 'cyan' }} />

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px',
                flex: 1
            }}>
                {currentMovies.map(movie => (
                    <Movie key={movie.movieId} movie={movie} />
                ))}
            </div>

            <div>
  {Array(totalPages).fill().map((_, index) => (
    <button 
      key={index} 
      onClick={() => setCurrentPage(index + 1)}
      style={{ margin: '0 10px' }}
    >
      {index + 1}
    </button>
  ))}
</div>
        </div>
    );
}

export default HomePage;
