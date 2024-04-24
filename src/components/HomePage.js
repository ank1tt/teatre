import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  {HomeOutlined, SearchOutlined, LoginOutlined, LogoutOutlined} from '@ant-design/icons';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';

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
    const [isSearchOpen, setIsSearchOpen] = useState(false);
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

    const handleSearchClick = () => {
        setIsSearchOpen(!isSearchOpen);
    };

    return (
        <div style={{ backgroundColor: 'black', color: 'white', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between' , alignItems: 'center'}}>
                <h1 style={{ color: 'yellow', fontFamily: 'monospace, sans-serif'}}>teatre</h1>
                <div style={{display: 'flex', alignItems: 'center'}} >
                <Link to="/home" style={{ color: 'yellow', fontWeight: 'bold', marginRight: '20px' }} title='Home'>
                    <HomeOutlined style={{fontSize: '24px'}} />
                </Link>

                <div onClick={handleSearchClick} style={{fontSize: '24px', marginRight: '20px', cursor: 'pointer', color: 'yellow'}} title="Search Movies">
                     <SearchOutlined />
                </div>  

    <Link to="/login" style={{ color: 'green', fontWeight: 'bold', }} title='Login'>
    <LoginOutlined style={{fontSize: '24px', marginRight: '20px'}} />
    </Link>

    <LogoutOutlined  style={{fontSize: '24px', marginRight: '20px', verticalAlign: 'middle', color: 'red'}}/>

    <Link to="/register" style={{ color: 'yellow', fontWeight: 'bold' }} title='Register'>
        <AppRegistrationRoundedIcon style={{fontSize: '26px', marginRight: '15px', verticalAlign: 'middle'}} />
    </Link>
                </div>
            </nav>

            {isSearchOpen && (
                <input type="text" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} placeholder="Search movies..." style={{ backgroundColor: 'yellow' }} />
            )}

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