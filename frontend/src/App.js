// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import "./App.css";
// import LogIn from "./components/UserLogin";
// import Register from "./components/Register";
// import React, { Component } from "react";
// import Navbar from "./components/Navbar";
// import BookSlot from "./components/BookSlot";
// import MyBookings from "./components/MyBookings";
// import BookingCancellation from "./components/BookingCancellation";
// import BookSeatsNew from "./components/BookSeatsNew";
// import Home from "./components/landingpage/Home";
// import NavigationBar from "./components/landingpage/NavigationBar";
// import MovieDetails from "./components/MovieDetails/MovieDetails";

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <NavigationBar />
//         <Routes>
//           <Route path="/login" element={<LogIn />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="*" element={<Navigate to="/home" />} />
//           {/* <Route path="/bookseats" element={<BookSeats/>}></Route> */}
//           <Route
//             path="/:movieId/:movieTitle/:img/bookslot"
//             element={<BookSlot />}
//           />
//           <Route path="/bookings" element={<MyBookings />} />
//           <Route
//             path="/:bookingId/cancelbooking"
//             element={<BookingCancellation />}
//           />

//           <Route path="/bookseats" element={<BookSeatsNew />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import LogIn from "./components/UserLogin";
import Register from "./components/Register";
import React from "react";
import Navbar from "./components/landingpage/NavigationBar";
import BookSlot from "./components/BookSlot";
import MyBookings from "./components/MyBookings";
import BookingCancellation from "./components/BookingCancellation";
import BookSeatsNew from "./components/BookSeatsNew";
import NavigationBar from "./components/landingpage/NavigationBar";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import Home from "./components/landingpage/Home";

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
    bookingId: 5,
    hallId: 1,
    movieName: "Extraction",
    time: "12:00:00",
    date: "2024-02-06",
    numberOfSeats: 5,
    price: 800,
    img: "https://m.media-amazon.com/images/I/51hZr4pfAwL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    bookingId: 6,
    hallId: 1,
    movieName: "King Kong",
    time: "12:00:00",
    date: "2024-02-06",
    numberOfSeats: 5,
    price: 800,
    img: "https://www.originalfilmart.com/cdn/shop/products/king_kong_2005_teaser_original_film_art_5000x.jpg?v=1605122703",
  },
  {
    bookingId: 7,
    hallId: 1,
    movieName: "The Sorcerers Apprentice",
    time: "12:00:00",
    date: "2024-02-06",
    numberOfSeats: 5,
    price: 800,
    img: "https://image.tmdb.org/t/p/original/b5pIUsGll0418NyfNA5eYCI9aoK.jpg",
  },
  {
    bookingId: 8,
    hallId: 1,
    movieName: "Jurassic World",
    time: "12:00:00",
    date: "2024-02-06",
    numberOfSeats: 5,
    price: 800,
    img: "https://e1.pxfuel.com/desktop-wallpaper/665/710/desktop-wallpaper-jurassic-world-3-discover-more-dominion-poster-jurassic-world-jurassic-world-2022-%E2%80%A6-in-2022-jurassic-world-3-2022.jpg",
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar mybookings={mybookings} />
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/home" />} />
          <Route
            path="/:movieId/:movieTitle/:img/bookslot"
            element={<BookSlot />}
          />
          <Route path="/bookings" element={<MyBookings />} />
          <Route
            path="/:bookingId/cancelbooking"
            element={<BookingCancellation />}
          />
          <Route path="/bookseats" element={<BookSeatsNew />} />
          <Route
            path="/:movieId/:movieTitle/:img/details"
            element={<MovieDetails mybookings={mybookings} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
