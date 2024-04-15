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

import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "antd";

const MovieDetails = ({ mybookings }) => {
  const { movieId, movieTitle, img } = useParams();
  const selectedMovie = mybookings.find(
    (booking) =>
      booking.bookingId === parseInt(movieId) &&
      booking.movieName === movieTitle &&
      booking.img === decodeURIComponent(img)
  );

  if (!selectedMovie) {
    return <div>Movie not found</div>;
  }

  return (
    <div>
      <h1>{selectedMovie.movieName}</h1>
      <img
        src={selectedMovie.img}
        alt={selectedMovie.movieName}
        style={{
          width: "300px",
          height: "450px",
          objectFit: "cover",
        }}
      />
      <Card>
        <p>
          <b>Booking Id</b>: {selectedMovie.bookingId}
        </p>
        <p>
          <b>Hall Id</b>: {selectedMovie.hallId}
        </p>
        <p>
          <b>Time</b>: {selectedMovie.time}
        </p>
        <p>
          <b>Date</b>: {selectedMovie.date}
        </p>
        <p>
          <b>Number of Seats</b>: {selectedMovie.numberOfSeats}
        </p>
        <p>
          <b>Price</b>: {selectedMovie.price}
        </p>
      </Card>
    </div>
  );
};

export default MovieDetails;
