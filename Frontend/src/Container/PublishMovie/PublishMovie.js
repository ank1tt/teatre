// import React, { useState } from "react";
// import DetailsContainer from "../Details/DetailsContainer";

// const PublishMovie = () => {
//   const [movieId, setMovieId] = useState("");
//   const [movieName, setMovieName] = useState("");
//   const [publishedMovieId, setPublishedMovieId] = useState(null);
//   const [published, setPublished] = useState(false);

//   const handlePublish = () => {
//     if (movieId === publishedMovieId) {
//       alert(`Movie ${movieName} is already published.`);
//     } else {
//       setPublishedMovieId(movieId);
//       setPublished(true);
//       alert(`Movie ${movieName} has been published.`);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Movie ID"
//         value={movieId}
//         onChange={(e) => setMovieId(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="Movie Name"
//         value={movieName}
//         onChange={(e) => setMovieName(e.target.value)}
//       />
//       <button onClick={handlePublish}>Publish</button>
//       <DetailsContainer published={published} movieid={publishedMovieId} />
//     </div>
//   );
// };

// export default PublishMovie;
