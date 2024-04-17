import React,{useState,useRef, useEffect} from "react";
import styles from './LandingPage.module.css';
import { Card,Col,Row } from "antd";
import { Link, Route,Routes ,navigate, useParams} from "react-router-dom";
import BookSlot from "../BookSlot";
import axios from "axios";
import NavigationBar from "./NavigationBar";
import MovieDetails from "./MovieDetails";
const Meta = {Card};

const trendingMovies = [
  {
    id: 1,
    movieName: "Balkanskiy rubezh",
    img: "https://cdn.cinematerial.com/p/297x/i9fiv7yv/balkanskiy-rubezh-russian-movie-poster-md.jpg?v=1544796520",
    rating: "9.3/10",
    language: "English",
    description:
      "From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
    cast: [
      {
        name: "Wagner Moura",
        img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
      },
      {
        name: "Nick Offerman",
        img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
      },
      {
        name: "Jeremy Piven",
        img: "https://image.tmdb.org/t/p/w185/pqdR8zqAWF87chGYlbdYr0YfC7g.jpg",
      },
      {
        name: "Katheryn Winnick",
        img: "https://image.tmdb.org/t/p/w185/vQSqH3ybDWZHZIqX4NZKhOCXAhQ.jpg",
      },
    ],
  },
  {
    id: 2,
    movieName: "GreenLand",
    img: "https://media-cache.cinematerial.com/p/500x/qylcv3az/greenland-italian-movie-poster.jpg?v=1605340272",
    rating: "9.3/10",
    language: "English",
    description:
      "From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
    cast: [
      {
        name: "Katheryn Winnick",
        img: "https://image.tmdb.org/t/p/w185/vQSqH3ybDWZHZIqX4NZKhOCXAhQ.jpg",
      },
      {
        name: "Wagner Moura",
        img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
      },
      {
        name: "Nick Offerman",
        img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
      },
      {
        name: "Jeremy Piven",
        img: "https://image.tmdb.org/t/p/w185/pqdR8zqAWF87chGYlbdYr0YfC7g.jpg",
      },
      {
        name: "Wagner Moura",
        img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
      },
      {
        name: "Wagner Moura",
        img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
      },
    ],
  },
  {
    id: 3,
    movieName: "Transformers",
    img: "https://cdn.cinematerial.com/p/297x/00y3oix2/transformers-rise-of-the-beasts-movie-poster-md.jpg?v=1682600690",
    rating: "9.3/10",
    language: "English",
    description:
      "From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
    cast: [
      {
        name: "Wagner Moura",
        img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
      },
      {
        name: "Katheryn Winnick",
        img: "https://image.tmdb.org/t/p/w185/vQSqH3ybDWZHZIqX4NZKhOCXAhQ.jpg",
      },
      {
        name: "Nick Offerman",
        img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
      },
      {
        name: "Jeremy Piven",
        img: "https://image.tmdb.org/t/p/w185/pqdR8zqAWF87chGYlbdYr0YfC7g.jpg",
      },
    ],
  },
  {
    id: 4,
    movieName: "Fast & Furious",
    img: "https://cdn.cinematerial.com/p/297x/nyt7hmpg/fast-furious-presents-hobbs-shaw-movie-poster-md.jpg?v=1561790306",
    rating: "9.3/10",
    language: "English",
    description:
      "From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
    cast: [
      {
        name: "Jeremy Piven",
        img: "https://image.tmdb.org/t/p/w185/pqdR8zqAWF87chGYlbdYr0YfC7g.jpg",
      },
      {
        name: "Wagner Moura",
        img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
      },
      {
        name: "Nick Offerman",
        img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
      },
      {
        name: "Nick Offerman",
        img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
      },
    ],
  },
  {
    id: 5,
    movieName: "Terminator",
    img: "https://cdn.cinematerial.com/p/297x/xgzsytdx/terminator-dark-fate-movie-poster-md.jpg?v=1567160782",
    rating: "9.3/10",
    language: "English",
    description:
      "From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
    cast: [
      {
        name: "Wagner Moura",
        img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
      },
      {
        name: "Nick Offerman",
        img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
      },
      {
        name: "Jeremy Piven",
        img: "https://image.tmdb.org/t/p/w185/pqdR8zqAWF87chGYlbdYr0YfC7g.jpg",
      },
      {
        name: "Nick Offerman",
        img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
      },
    ],
  },
    {
      id: 6,
      movieName: "Free Guy",
      img: "https://cdn.cinematerial.com/p/297x/crmd3eci/free-guy-movie-poster-md.jpg?v=1623321639",
      rating: "9.3/10",
      language: "English",
      description:
        "From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
      cast: [
        {
          name: "Wagner Moura",
          img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
        },
        {
          name: "Jeremy Piven",
          img: "https://image.tmdb.org/t/p/w185/pqdR8zqAWF87chGYlbdYr0YfC7g.jpg",
        },
        {
          name: "Katheryn Winnick",
          img: "https://image.tmdb.org/t/p/w185/vQSqH3ybDWZHZIqX4NZKhOCXAhQ.jpg",
        },
        {
          name: "Nick Offerman",
          img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
        },
      ],
    },
    {
      id: 7,
      movieName: "Halloween Kills",
      img: "https://cdn.cinematerial.com/p/297x/dsfyltco/halloween-kills-movie-poster-md.jpg?v=1633459645",
      rating: "9.3/10",
      language: "English",
      description:
        "From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
      cast: [
        {
          name: "Wagner Moura",
          img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
        },
        {
          name: "Katheryn Winnick",
          img: "https://image.tmdb.org/t/p/w185/vQSqH3ybDWZHZIqX4NZKhOCXAhQ.jpg",
        },
        {
          name: "Nick Offerman",
          img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
        },
        {
          name: "Jeremy Piven",
          img: "https://image.tmdb.org/t/p/w185/pqdR8zqAWF87chGYlbdYr0YfC7g.jpg",
        },
      ],
    },
    {
      id: 8,
      movieName: "The Father",
      img: "https://cdn.cinematerial.com/p/297x/vntmjrsh/the-father-british-movie-poster-md.jpg?v=1600268666",
      rating: "9.3/10",
      language: "English",
      description:
        "From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.From filmmaker Alex Garland comes a journey across a dystopian future America, following a team of military-embedded journalists as they race against time to reach DC before rebel factions descend upon the White House.",
      cast: [
        {
          name: "Jeremy Piven",
          img: "https://image.tmdb.org/t/p/w185/pqdR8zqAWF87chGYlbdYr0YfC7g.jpg",
        },
        {
          name: "Wagner Moura",
          img: "https://resizing.flixster.com/AN-pP2Heae5XbqjTg4WSWK1lAuI=/100x120/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/298674_v9_bb.jpg",
        },
        {
          name: "Katheryn Winnick",
          img: "https://image.tmdb.org/t/p/w185/vQSqH3ybDWZHZIqX4NZKhOCXAhQ.jpg",
        },
        {
          name: "Nick Offerman",
          img: "https://resizing.flixster.com/eYGoi4GQ2FzlM_XKqhaAAmG04Wg=/218x280/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/170612_v9_bc.jpg",
        },
      ],
    },
    
];
//CONNECTION


// function Home()
// {

//     const [myBookingsCurrent, setMyBookingsCurrent] = useState([]);
//     useEffect(()=>{
//         loadsShows();
//     },[]);

//     const {userId} = useParams();

//     const loadsShows =async ()=>
//     {
//         try 
//         {
//             const response = await axios.get(`http://localhost:8080/movies/getallmovies`);
//             console.log(myBookingsCurrent);
//             setMyBookingsCurrent(response.data);
//         } 
//         catch (error) 
//         {
//             console.error('Error fetching bookings:', error);
//         }
//     }

//     const [searchTerm, setSearchTerm] = useState('');
//     const filteredMovies = searchTerm ? trendingMovies.filter((movie)=>movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())): trendingMovies;
//     const movielistRef = useRef(null);
//     const [selectedMovie, setSelectedMovie] = useState(null);




//     function scrollLeft(e) {
//     //   const movielist = document.querySelector('.movielist');
//     const movielist = movielistRef.current;
//     if(movielist)
//     {
//         movielist.scrollBy({ left: -100, behavior: 'smooth' });
//     }
      
//     }
    
//     function scrollRight(e) {
//         const movielist = movielistRef.current;
//         if(movielist)
//         {
//             movielist.scrollBy({ left: 100, behavior: 'smooth' });
//         }
//     }
    

//     const handleClick=(e)=>
//     {
//         console.log(e);
//         // navigate(`/${bookingId}/${movieName}/${encodedImg}/details`);
//         //e.preventDefault();
//         //alert(JSON.stringify(e,null,2));
        
//     }
//     function handleClickT(movie) {
//         setSelectedMovie(movie);
//     }
 
//     if (selectedMovie) {
//         return <MovieDetails movie={selectedMovie} />;
//     }
//     return(
//         <div style={{backgroundColor:'black', minHeight: '100vh'}}>
//             <NavigationBar/>
            
//             <input type="text" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} placeholder="Search movies..." style={{height:'30px',width:'90%', marginTop:'10px',marginBottom:'10px',borderRadius:'18px',border:'1px solid #ccc',textAlign:'center'}} />

            

//             <div className={styles.movielist} ref={movielistRef}>

//                 <div className={`${styles.arrow} ${styles.left}`} onClick={scrollLeft}>&lt;</div>

//                 {filteredMovies.map(booking=>
//                         {
//                             return(
//                                     <div className={styles.movie} onClick={()=>handleClickT(booking)}>
//                                         <img
//                                             src={booking.img}
//                                             alt="Movie"
//                                             style={{ width: "100%", height: "80%" }}
//                                         />
//                                         <div
//                                             style={{
//                                                 height: "20%",
//                                                 backgroundColor: "rgba(0, 0, 0, 0.5)",
//                                                 color: "white",
//                                                 padding: "10px",
//                                             }}
//                                             >
//                                             {booking.movieName}
//                                         </div>
//                                     </div>
//                             );
//                         }
//                     )}

//                     <div className={`${styles.arrow} ${styles.right}`} onClick={scrollRight}>&gt;</div>

//             </div>

//             <div className={styles.userprofilediv}>
//                 {myBookingsCurrent.map(booking=>
//                         {
//                             const encodedImg=encodeURIComponent(booking.img);
//                             // console.log("Imageeeee:" , encodedImg);

//                             return(
//                                     <div key={booking.bookingId} className={styles.booking} onClick={()=>handleClick(booking)}>
//                                     <center><img src={booking.img} alt='Movie' /></center>
//                                     <Link
//                                         className="book-now-link" // Add this line
//                                         to={`/${userId}/${booking.movieId}/${booking.movieName}/bookslot`}
//                                     >
//                                         Book Now
//                                     </Link>

                                   
//                                     </div>
//                             );
//                         }
//                     )}
//             </div>
//         </div>
//     );
// }

// export default Home;


//ANKIT HOME

function Home() {
    const [myBookingsCurrent, setMyBookingsCurrent] = useState([]);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
    const intervalRef = useRef(null);
    const [selectedMovie, setSelectedMovie] = useState(null);
  
    useEffect(() => {
      loadsShows();
  
      // Clear the interval when the component unmounts
      return () => clearInterval(intervalRef.current);
    }, []);
  
    useEffect(() => {
      // Change the movie every 5 seconds
      intervalRef.current = setInterval(() => {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % trendingMovies.length);
      }, 5000);
    }, []);
  
    const { userId } = useParams();
  
    const loadsShows = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/movies/getallmovies`);
        console.log(myBookingsCurrent);
        setMyBookingsCurrent(response.data);
      } catch (error) {
        console.error('Error fetching bookings:', error);
      }
    }
  
    const [searchTerm, setSearchTerm] = useState('');
    const filteredMovies = searchTerm ? trendingMovies.filter((movie) => movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())) : trendingMovies;
    const movielistRef = useRef(null);
  
    const currentMovie = trendingMovies[currentMovieIndex];
  
    function handleClickMovie(movie) {
      setSelectedMovie(movie);
    }
  
    if (selectedMovie) {
      return <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />;
    }
  
    return (
      <div style={{ backgroundColor: 'black', minHeight: '100vh' }}>
        <NavigationBar/>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Search movies..." style={{ height: '30px', width: '90%', marginTop: '10px', marginBottom: '10px', borderRadius: '18px', border: '1px solid #ccc', textAlign: 'center' }} />
  
        <div className={styles.halfScreenMovie} onClick={() => handleClickMovie(currentMovie)}>
          <img
            src={currentMovie.img}
            alt="Movie"
            style={{ maxWidth: "80%", height: "100%", cursor: "pointer" }}
          />
        </div>
  
        <div className={styles.userprofilediv}>
          {myBookingsCurrent.map((booking) => {
            const encodedImg = encodeURIComponent(booking.img);
  
            return (
              <div key={booking.bookingId} className={styles.booking}>
                <center><img src={booking.img} alt='Movie' /></center>
                <Link
                  className="book-now-link"
                  to={`/${userId}/${booking.movieId}/${booking.movieName}/bookslot`}
                >
                  Book Now
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  
  export default Home;
