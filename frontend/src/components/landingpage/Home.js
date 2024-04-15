// import React, { useState, useRef } from "react";
// import styles from "./LandingPage.module.css";
// import { Card, Col, Row } from "antd";
// import { Link, Route, Routes } from "react-router-dom";
// import BookSlot from "../BookSlot";
// const Meta = { Card };

// const mybookings = [
//   {
//     bookingId: 1,
//     hallId: 1,
//     movieName: "Avengers",
//     time: "18:00:00",
//     date: "2024-02-26",
//     numberOfSeats: 18,
//     price: 400,
//     img: "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg",
//   },
//   {
//     bookingId: 2,
//     hallId: 2,
//     movieName: "Godzilla",
//     time: "16:00:00",
//     date: "2024-02-16",
//     numberOfSeats: 20,
//     price: 600,
//     img: "https://m.media-amazon.com/images/I/91GUBXWK+gL.jpg",
//   },
//   {
//     bookingId: 3,
//     hallId: 3,
//     movieName: "Pirates of Caribbean",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 9,
//     price: 1000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxL4XlEdSUU1Q3hMmTQGbwKPLCiHpCOnUx4PNEnmdog&s",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "Twilight",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://i0.wp.com/4.bp.blogspot.com/-855TmgAtAn0/UBZD5Xxm2vI/AAAAAAAAAHw/THjQedA0ke4/s1600/breaking-dawn-part-2-poster-bella.jpg",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "Extraction",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://m.media-amazon.com/images/I/51hZr4pfAwL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "King Kong",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://www.originalfilmart.com/cdn/shop/products/king_kong_2005_teaser_original_film_art_5000x.jpg?v=1605122703",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "The Sorcerers Apprentice",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://image.tmdb.org/t/p/original/b5pIUsGll0418NyfNA5eYCI9aoK.jpg",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "Jurassic World",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://e1.pxfuel.com/desktop-wallpaper/665/710/desktop-wallpaper-jurassic-world-3-discover-more-dominion-poster-jurassic-world-jurassic-world-2022-%E2%80%A6-in-2022-jurassic-world-3-2022.jpg",
//   },
// ];

// function Home() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredMovies = searchTerm
//     ? mybookings.filter((movie) =>
//         movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : mybookings;
//   const movielistRef = useRef(null);

//   function scrollLeft(e) {
//     //   const movielist = document.querySelector('.movielist');
//     const movielist = movielistRef.current;
//     if (movielist) {
//       movielist.scrollBy({ left: -100, behavior: "smooth" });
//     }
//   }

//   function scrollRight(e) {
//     const movielist = movielistRef.current;
//     if (movielist) {
//       movielist.scrollBy({ left: 100, behavior: "smooth" });
//     }
//   }

//   const handleClick = (e) => {
//     console.log(e);
//     //e.preventDefault();
//     alert(JSON.stringify(e, null, 2));
//   };
//   return (
//     <div>
//       {/* <header className={styles.header}>
//                 <h1>Welcome to Teatre</h1>
//             </header> */}

//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search movies..."
//         style={{
//           height: "30px",
//           width: "90%",
//           marginTop: "10px",
//           marginBottom: "10px",
//           borderRadius: "18px",
//           border: "1px solid #ccc",
//           textAlign: "center",
//         }}
//       />

//       <div className={styles.movielist} ref={movielistRef}>
//         <div className={`${styles.arrow} ${styles.left}`} onClick={scrollLeft}>
//           &lt;
//         </div>

//         {filteredMovies.map((booking) => {
//           return (
//             <div className={styles.movie} onClick={() => handleClick(booking)}>
//               <center>
//                 <img src={booking.img} alt="hello" />
//               </center>
//               <Card type="inner" title={booking.movieName}></Card>
//               {/* <Card type="inner" title={booking.movieName}>
//                 <b>Booking Id</b> : {booking.bookingId}, <br></br>
//                 <b>Hall Id</b> : {booking.hallId},<br></br>
//                 <b>Movie Title :</b> {booking.movieName},<br></br>
//                 <b>Time : </b>
//                 {booking.time},<br></br>
//                 <b>Date : </b>
//                 {booking.date},<br></br>
//                 <b>Number Of Seats : </b>
//                 {booking.numberOfSeats},<br></br>
//                 <b>Price : </b>
//                 {booking.price}
//               </Card> */}
//             </div>
//           );
//         })}

//         <div
//           className={`${styles.arrow} ${styles.right}`}
//           onClick={scrollRight}
//         >
//           &gt;
//         </div>
//       </div>

//       <div className={styles.userprofilediv}>
//         {mybookings.map((booking) => {
//           const encodedImg = encodeURIComponent(booking.img);
//           console.log("Imageeeee:", encodedImg);

//           return (
//             <div
//               className={styles.booking}
//               onClick={() => handleClick(booking)}
//             >
//               <center>
//                 <img src={booking.img} alt="hello" />
//               </center>

//               <Card
//                 type="inner"
//                 title={booking.movieName}
//                 extra={
//                   <Link
//                     to={`/${booking.bookingId}/${booking.movieName}/${encodedImg}/bookslot`}
//                   >
//                     Book Now
//                   </Link>
//                 }
//               >
//                 <b>Booking Id</b> : {booking.bookingId}, <br></br>
//                 <b>Hall Id</b> : {booking.hallId},<br></br>
//                 <b>Movie Title :</b> {booking.movieName},<br></br>
//                 <b>Time : </b>
//                 {booking.time},<br></br>
//                 <b>Date : </b>
//                 {booking.date},<br></br>
//                 <b>Number Of Seats : </b>
//                 {booking.numberOfSeats},<br></br>
//                 <b>Price : </b>
//                 {booking.price}
//               </Card>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Home;

import React, { useState, useRef, useEffect } from "react";
import styles from "./LandingPage.module.css";
import { Card } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import MovieDetails from "../MovieDetails/MovieDetails";

const mybookings = [
  {
    bookingId: 1,
    hallId: 1,
    movieName: "Avengers",
    time: "18:00:00",
    date: "2024-02-26",
    numberOfSeats: 18,
    price: 400,
    img: "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg",
  },
  {
    bookingId: 2,
    hallId: 2,
    movieName: "Godzilla",
    time: "16:00:00",
    date: "2024-02-16",
    numberOfSeats: 20,
    price: 600,
    img: "https://m.media-amazon.com/images/I/91GUBXWK+gL.jpg",
  },
  {
    bookingId: 3,
    hallId: 3,
    movieName: "Pirates of Caribbean",
    time: "12:00:00",
    date: "2024-02-06",
    numberOfSeats: 9,
    price: 1000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxL4XlEdSUU1Q3hMmTQGbwKPLCiHpCOnUx4PNEnmdog&s",
  },
  {
    bookingId: 4,
    hallId: 1,
    movieName: "Twilight",
    time: "12:00:00",
    date: "2024-02-06",
    numberOfSeats: 5,
    price: 800,
    img: "https://i0.wp.com/4.bp.blogspot.com/-855TmgAtAn0/UBZD5Xxm2vI/AAAAAAAAAHw/THjQedA0ke4/s1600/breaking-dawn-part-2-poster-bella.jpg",
  },
  {
    bookingId: 4,
    hallId: 1,
    movieName: "Extraction",
    time: "12:00:00",
    date: "2024-02-06",
    numberOfSeats: 5,
    price: 800,
    img: "https://m.media-amazon.com/images/I/51hZr4pfAwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookingId: 4,
    hallId: 1,
    movieName: "King Kong",
    time: "12:00:00",
    date: "2024-02-06",
    numberOfSeats: 5,
    price: 800,
    img: "https://www.originalfilmart.com/cdn/shop/products/king_kong_2005_teaser_original_film_art_5000x.jpg?v=1605122703",
  },
  // {
  //   bookingId: 4,
  //   hallId: 1,
  //   movieName: "The Sorcerers Apprentice",
  //   time: "12:00:00",
  //   date: "2024-02-06",
  //   numberOfSeats: 5,
  //   price: 800,
  //   img: "https://image.tmdb.org/t/p/original/b5pIUsGll0418NyfNA5eYCI9aoK.jpg",
  // },
  // {
  //   bookingId: 4,
  //   hallId: 1,
  //   movieName: "Jurassic World",
  //   time: "12:00:00",
  //   date: "2024-02-06",
  //   numberOfSeats: 5,
  //   price: 800,
  //   img: "https://e1.pxfuel.com/desktop-wallpaper/665/710/desktop-wallpaper-jurassic-world-3-discover-more-dominion-poster-jurassic-world-jurassic-world-2022-%E2%80%A6-in-2022-jurassic-world-3-2022.jpg",
  // },
];

function Home() {
  const [listOfMovies, setListOfMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredMovies = searchTerm
    ? mybookings.filter((movie) =>
        movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : mybookings;
  const movielistRef = useRef(null);
  const navigate = useNavigate();

  function scrollLeft(e) {
    const movielist = movielistRef.current;
    if (movielist) {
      movielist.scrollBy({ left: -100, behavior: "smooth" });
    }
  }

  function scrollRight(e) {
    const movielist = movielistRef.current;
    if (movielist) {
      movielist.scrollBy({ left: 100, behavior: "smooth" });
    }
  }

  // useEffect(() => {
  //   fetch("http://localhost:8080/moviePoster/getAll")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setListOfMovies((prevPosters) => [...prevPosters, ...data]);
  //       console.log(data);
  //     })
  //     .catch((error) => {
  //       console.error("Error:", error);
  //     });
  // }, []);

  useEffect(() => {
    fetch("http://localhost:8080/moviePoster/getAll")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setListOfMovies(data); // Set the state directly to the new data
        console.log(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleClick = (booking) => {
    const { bookingId, movieName, img } = booking;
    const encodedImg = encodeURIComponent(img);
    navigate(`/${bookingId}/${movieName}/${encodedImg}/details`);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search movies..."
        style={{
          height: "30px",
          width: "90%",
          marginTop: "10px",
          marginBottom: "10px",
          borderRadius: "18px",
          border: "1px solid #ccc",
          textAlign: "center",
        }}
      />

      <div className={styles.movielist} ref={movielistRef}>
        <div className={`${styles.arrow} ${styles.left}`} onClick={scrollLeft}>
          &lt;
        </div>

        {filteredMovies.map((booking) => (
          <div
            key={booking.bookingId}
            className={styles.movie}
            onClick={() => handleClick(booking)}
          >
            <img
              src={booking.img}
              alt="Movie"
              style={{ width: "100%", height: "80%" }}
            />
            <div
              style={{
                height: "20%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                padding: "10px",
              }}
            >
              {booking.movieName}
            </div>
          </div>
        ))}

        <div
          className={`${styles.arrow} ${styles.right}`}
          onClick={scrollRight}
        >
          &gt;
        </div>
      </div>

      <div className={styles.userprofilediv}>
        {listOfMovies.map((booking) => {
          const encodedImg = encodeURIComponent(booking.img);

          return (
            <div
              key={booking.bookingId}
              className={styles.booking}
              onClick={() => handleClick(booking)}
            >
              <center>
                <img src={booking.img} alt="Movie" />
              </center>
              <Link
                className="book-now-link" // Add this line
                to={`/${booking.bookingId}/${booking.movieName}/${encodedImg}/bookslot`}
              >
                Book Now
              </Link>
              {/* <Card
                type="inner"
                title={
                  <div style={{ marginBottom: "10px" }}>
                    {booking.movieName}
                  </div>
                }  
                extra={
                  <Link
                    to={`/${booking.bookingId}/${booking.movieName}/${encodedImg}/bookslot`}
                  >
                    Book Now
                  </Link>
                }
              >
                <b>Booking Id</b>: {booking.id}, <br />
                <b>Hall Id</b>: {booking.hallId},<br />
                <b>Movie Title</b>: {booking.movieName},<br />
                <b>Time</b>: {booking.time},<br />
                <b>Date</b>: {booking.date},<br />
                <b>Number of Seats</b>: {booking.numberOfSeats},<br />
                <b>Price</b>: {booking.price}
              </Card> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;

// import React, { useState, useRef } from "react";
// import styles from "./LandingPage.module.css";
// import { Card } from "antd";
// import { Link, useNavigate } from "react-router-dom";

// // ... (rest of your code)

// const mybookings = [
//   {
//     bookingId: 1,
//     hallId: 1,
//     movieName: "Avengers",
//     time: "18:00:00",
//     date: "2024-02-26",
//     numberOfSeats: 18,
//     price: 400,
//     img: "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg",
//   },
//   {
//     bookingId: 2,
//     hallId: 2,
//     movieName: "Godzilla",
//     time: "16:00:00",
//     date: "2024-02-16",
//     numberOfSeats: 20,
//     price: 600,
//     img: "https://m.media-amazon.com/images/I/91GUBXWK+gL.jpg",
//   },
//   {
//     bookingId: 3,
//     hallId: 3,
//     movieName: "Pirates of Caribbean",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 9,
//     price: 1000,
//     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxL4XlEdSUU1Q3hMmTQGbwKPLCiHpCOnUx4PNEnmdog&s",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "Twilight",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://i0.wp.com/4.bp.blogspot.com/-855TmgAtAn0/UBZD5Xxm2vI/AAAAAAAAAHw/THjQedA0ke4/s1600/breaking-dawn-part-2-poster-bella.jpg",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "Extraction",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://m.media-amazon.com/images/I/51hZr4pfAwL._AC_UF1000,1000_QL80_.jpg",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "King Kong",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://www.originalfilmart.com/cdn/shop/products/king_kong_2005_teaser_original_film_art_5000x.jpg?v=1605122703",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "The Sorcerers Apprentice",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://image.tmdb.org/t/p/original/b5pIUsGll0418NyfNA5eYCI9aoK.jpg",
//   },
//   {
//     bookingId: 4,
//     hallId: 1,
//     movieName: "Jurassic World",
//     time: "12:00:00",
//     date: "2024-02-06",
//     numberOfSeats: 5,
//     price: 800,
//     img: "https://e1.pxfuel.com/desktop-wallpaper/665/710/desktop-wallpaper-jurassic-world-3-discover-more-dominion-poster-jurassic-world-jurassic-world-2022-%E2%80%A6-in-2022-jurassic-world-3-2022.jpg",
//   },
// ];

// function Home() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredMovies = searchTerm
//     ? mybookings.filter((movie) =>
//         movie.movieName.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : mybookings;
//   const movielistRef = useRef(null);
//   const navigate = useNavigate();

//   function scrollLeft(e) {
//     const movielist = movielistRef.current;
//     if (movielist) {
//       movielist.scrollBy({ left: -100, behavior: "smooth" });
//     }
//   }

//   function scrollRight(e) {
//     const movielist = movielistRef.current;
//     if (movielist) {
//       movielist.scrollBy({ left: 100, behavior: "smooth" });
//     }
//   }

//   const handleClick = (booking) => {
//     const { bookingId, movieName, img } = booking;
//     const encodedImg = encodeURIComponent(img);
//     navigate(`/${bookingId}/${movieName}/${encodedImg}/details`);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search movies..."
//         style={{
//           height: "30px",
//           width: "90%",
//           marginTop: "10px",
//           marginBottom: "10px",
//           borderRadius: "18px",
//           border: "1px solid #ccc",
//           textAlign: "center",
//         }}
//       />

//       <div className={styles.movielist} ref={movielistRef}>
//         <div className={`${styles.arrow} ${styles.left}`} onClick={scrollLeft}>
//           &lt;
//         </div>

//         {filteredMovies.map((booking) => (
//           <div
//             key={booking.bookingId}
//             className={styles.movie}
//             onClick={() => handleClick(booking)}
//           >
//             <center>
//               <img src={booking.img} alt="Movie" />
//             </center>
//             <Card type="inner" title={booking.movieName} />
//           </div>
//         ))}

//         <div
//           className={`${styles.arrow} ${styles.right}`}
//           onClick={scrollRight}
//         >
//           &gt;
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useRef, useEffect } from "react";
// import styles from "./LandingPage.module.css";
// import { Card } from "antd";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [posters, setPosters] = useState([]);
//   const movielistRef = useRef(null);
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   fetch("http://localhost:8080/moviePoster")
//   //     .then((response) => response.json())
//   //     .then((data) => setPosters(data))
//   //     .catch((error) => {
//   //       console.error("Error:", error);
//   //     });
//   // }, []);

//   // useEffect(() => {
//   //   fetch("http://localhost:8080/moviePoster/getAll")
//   //     .then((response) => response.json())
//   //     .then((data) => {
//   //       setPosters(data);
//   //       console.log(data);
//   //     })
//   //     .catch((error) => {
//   //       console.error("Error:", error);
//   //     });
//   // }, []);

//   useEffect(() => {
//     fetch("http://localhost:8080/moviePoster/getAll")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((ids) => {
//         // Fetch details for each movie
//         return Promise.all(
//           ids.map((id) =>
//             fetch(`http://localhost:8080/moviePoster/getAll`).then(
//               (response) => {
//                 if (!response.ok) {
//                   throw new Error(`HTTP error! status: ${response.status}`);
//                 }
//                 return response.json();
//               }
//             )
//           )
//         );
//       })
//       .then((movies) => {
//         setPosters(movies);
//         console.log(movies);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   const handleClick = (poster) => {
//     const { id, movieTitle, imgUrl } = poster;
//     const encodedImg = encodeURIComponent(imgUrl);
//     navigate(`/${id}/${movieTitle}/${encodedImg}/details`);
//   };

//   const filteredPosters = searchTerm
//     ? posters.filter((poster) =>
//         poster.movieTitle.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : posters;

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search movies..."
//         style={{
//           height: "30px",
//           width: "90%",
//           marginTop: "10px",
//           marginBottom: "10px",
//           borderRadius: "18px",
//           border: "1px solid #ccc",
//           textAlign: "center",
//         }}
//       />

//       <div className={styles.movielist} ref={movielistRef}>
//         {filteredPosters.map((poster) => (
//           <div
//             key={poster.id}
//             className={styles.movie}
//             onClick={() => handleClick(poster)}
//           >
//             <center>
//               <img src={poster.imgUrl} alt="Movie" />
//             </center>
//             <Card type="inner" title={poster.movieTitle} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useRef, useEffect } from "react";
// import styles from "./LandingPage.module.css";
// import { Card } from "antd";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [posters, setPosters] = useState([]);
//   const movielistRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8080/moviePoster/getAll")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPosters(data);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   const handleClick = (poster) => {
//     const { id, title, img } = poster;
//     const encodedImg = encodeURIComponent(img);
//     navigate(`/${id}/${title}/${encodedImg}/details`);
//   };

//   const filteredPosters = searchTerm
//     ? posters.filter((poster) =>
//         poster.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : posters;

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search movies..."
//         style={{
//           height: "30px",
//           width: "90%",
//           marginTop: "10px",
//           marginBottom: "10px",
//           borderRadius: "18px",
//           border: "1px solid #ccc",
//           textAlign: "center",
//         }}
//       />

//       <div className={styles.movielist} ref={movielistRef}>
//         {filteredPosters.map((poster) => (
//           <div
//             key={poster.id}
//             className={styles.movie}
//             onClick={() => handleClick(poster)}
//           >
//             <center>
//               <img src={poster.img} alt="Movie" />
//             </center>
//             <Card type="inner" title={poster.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;

// import React, { useState, useRef, useEffect } from "react";
// import styles from "./LandingPage.module.css";
// import { Card } from "antd";
// import { useNavigate } from "react-router-dom";

// function Home() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [posters, setPosters] = useState([
//     {
//       bookingId: 1,
//       hallId: 1,
//       movieName: "Avengers",
//       time: "18:00:00",
//       date: "2024-02-26",
//       numberOfSeats: 18,
//       price: 400,
//       img: "https://cdn.marvel.com/content/1x/avengersendgame_lob_crd_05.jpg",
//     },
//     {
//       bookingId: 2,
//       hallId: 2,
//       movieName: "Godzilla",
//       time: "16:00:00",
//       date: "2024-02-16",
//       numberOfSeats: 20,
//       price: 600,
//       img: "https://m.media-amazon.com/images/I/91GUBXWK+gL.jpg",
//     },
//     {
//       bookingId: 3,
//       hallId: 3,
//       movieName: "Pirates of Caribbean",
//       time: "12:00:00",
//       date: "2024-02-06",
//       numberOfSeats: 9,
//       price: 1000,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhxL4XlEdSUU1Q3hMmTQGbwKPLCiHpCOnUx4PNEnmdog&s",
//     },
//     {
//       bookingId: 4,
//       hallId: 1,
//       movieName: "Twilight",
//       time: "12:00:00",
//       date: "2024-02-06",
//       numberOfSeats: 5,
//       price: 800,
//       img: "https://i0.wp.com/4.bp.blogspot.com/-855TmgAtAn0/UBZD5Xxm2vI/AAAAAAAAAHw/THjQedA0ke4/s1600/breaking-dawn-part-2-poster-bella.jpg",
//     },
//     {
//       bookingId: 4,
//       hallId: 1,
//       movieName: "Extraction",
//       time: "12:00:00",
//       date: "2024-02-06",
//       numberOfSeats: 5,
//       price: 800,
//       img: "https://m.media-amazon.com/images/I/51hZr4pfAwL._AC_UF1000,1000_QL80_.jpg",
//     },
//     {
//       bookingId: 4,
//       hallId: 1,
//       movieName: "King Kong",
//       time: "12:00:00",
//       date: "2024-02-06",
//       numberOfSeats: 5,
//       price: 800,
//       img: "https://www.originalfilmart.com/cdn/shop/products/king_kong_2005_teaser_original_film_art_5000x.jpg?v=1605122703",
//     },
//     {
//       bookingId: 4,
//       hallId: 1,
//       movieName: "The Sorcerers Apprentice",
//       time: "12:00:00",
//       date: "2024-02-06",
//       numberOfSeats: 5,
//       price: 800,
//       img: "https://image.tmdb.org/t/p/original/b5pIUsGll0418NyfNA5eYCI9aoK.jpg",
//     },
//     {
//       bookingId: 4,
//       hallId: 1,
//       movieName: "Jurassic World",
//       time: "12:00:00",
//       date: "2024-02-06",
//       numberOfSeats: 5,
//       price: 800,
//       img: "https://e1.pxfuel.com/desktop-wallpaper/665/710/desktop-wallpaper-jurassic-world-3-discover-more-dominion-poster-jurassic-world-jurassic-world-2022-%E2%80%A6-in-2022-jurassic-world-3-2022.jpg",
//     },
//   ]);
//   const movielistRef = useRef(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetch("http://localhost:8080/moviePoster/getAll")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         setPosters((prevPosters) => [...prevPosters, ...data]);
//         console.log(data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//       });
//   }, []);

//   const handleClick = (poster) => {
//     const { id, title, img } = poster;
//     const encodedImg = encodeURIComponent(img);
//     navigate(`/${id}/${title}/${encodedImg}/details`);
//   };

//   const filteredPosters = searchTerm
//     ? posters.filter((poster) =>
//         poster.title.toLowerCase().includes(searchTerm.toLowerCase())
//       )
//     : posters;

//   return (
//     <div>
//       <input
//         type="text"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder="Search movies..."
//         style={{
//           height: "30px",
//           width: "90%",
//           marginTop: "10px",
//           marginBottom: "10px",
//           borderRadius: "18px",
//           border: "1px solid #ccc",
//           textAlign: "center",
//         }}
//       />

//       <div className={styles.movielist} ref={movielistRef}>
//         {filteredPosters.map((poster) => (
//           <div
//             key={poster.id}
//             className={styles.movie}
//             onClick={() => handleClick(poster)}
//           >
//             <center>
//               <img src={poster.img} alt="Movie" />
//             </center>
//             <Card type="inner" title={poster.title} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
