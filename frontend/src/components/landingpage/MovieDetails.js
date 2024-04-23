// import React from "react";
// import { useParams } from "react-router-dom";
// import { Card } from "antd";

// const MovieDetails = ({ mybookings }) => {
//   const { movieId, movieTitle, img } = useParams();
//   const selectedMovie = mybookings.find(
//     (booking) =>
//       booking.bookingId === parseInt(movieId) &&
//       booking.movieName === movieTitle &&
//       booking.img === decodeURIComponent(img)
//   );

//   if (!selectedMovie) {
//     return <div>Movie not found</div>;
//   }

//   return (
//     <div>
//       <h1>{selectedMovie.movieName}</h1>
//       <img src={selectedMovie.img} alt={selectedMovie.movieName} />
//       <Card>
//         <p>
//           <b>Booking Id</b>: {selectedMovie.bookingId}
//         </p>
//         <p>
//           <b>Hall Id</b>: {selectedMovie.hallId}
//         </p>
//         <p>
//           <b>Time</b>: {selectedMovie.time}
//         </p>
//         <p>
//           <b>Date</b>: {selectedMovie.date}
//         </p>
//         <p>
//           <b>Number of Seats</b>: {selectedMovie.numberOfSeats}
//         </p>
//         <p>
//           <b>Price</b>: {selectedMovie.price}
//         </p>
//       </Card>
//     </div>
//   );
// };

// export default MovieDetails;

// import React from "react";
// import { useParams } from "react-router-dom";
// import { Card } from "antd";

// const MovieDetails = ({ mybookings }) => {
//   const { movieId, movieTitle, img } = useParams();
//   const selectedMovie = mybookings.find(
//     (booking) =>
//       booking.bookingId === parseInt(movieId) &&
//       booking.movieName === movieTitle &&
//       booking.img === decodeURIComponent(img)
//   );

//   if (!selectedMovie) {
//     return <div>Movie not found</div>;
//   }

//   return (
//     <div>
//       <h1>{selectedMovie.movieName}</h1>
//       <img
//         src={selectedMovie.img}
//         alt={selectedMovie.movieName}
//         style={{
//           width: "300px",
//           height: "450px",
//           objectFit: "cover",
//         }}
//       />
//       <Card>
//         <p>
//           <b>Booking Id</b>: {selectedMovie.bookingId}
//         </p>
//         <p>
//           <b>Hall Id</b>: {selectedMovie.hallId}
//         </p>
//         <p>
//           <b>Time</b>: {selectedMovie.time}
//         </p>
//         <p>
//           <b>Date</b>: {selectedMovie.date}
//         </p>
//         <p>
//           <b>Number of Seats</b>: {selectedMovie.numberOfSeats}
//         </p>
//         <p>
//           <b>Price</b>: {selectedMovie.price}
//         </p>
//       </Card>
//     </div>
//   );
// };

// export default MovieDetails;


import React from "react";
import "./MovieDetails.css"; // Assuming the CSS is in MovieDetails.css
import NavigationBar from "./NavigationBar";
 
const MovieDetails = ({ movie }) => {
  if (!movie) {
    return <div>No movie data available</div>;
  }
 
  return (
    <div className="movie-details">
      <NavigationBar/>
      <div className="poster-details">
        <div className="poster">
          <img src={movie.img} alt={movie.movieName} />
        </div>
        <div
          className="details"
          style={{
            textAlign: "left",
            lineHeight: "1.5",
            fontSize: "16px",
          }}
        >
          <h1 style={{ fontSize: "24px" }}>
            <span style={{ color: "red" }}>Movie Title : </span>
            <span style={{ color: "white" }}>{movie.movieName}</span>
          </h1>
          <p>
            <span style={{ color: "red" }}>Ratings : </span>
            <span style={{ color: "white" }}>{movie.rating}</span>
          </p>
          <p>
            <span style={{ color: "red" }}>Language : </span>
            <span style={{ color: "white" }}>{movie.language}</span>
          </p>
          <p>
            <span style={{ color: "red" }}>Description : </span>
            <br></br>
            <span style={{ color: "white" }}>{movie.description}</span>
          </p>
        </div>
      </div>
      <h2>Cast</h2>
      <div className="cast">
        {movie.cast.map((actor, index) => (
          <div key={index}>
            <img src={actor.img} alt={actor.name} />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
      {/* Add more movie details as needed */}
    </div>
  );
};
 
export default MovieDetails;