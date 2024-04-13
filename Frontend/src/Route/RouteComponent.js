import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FooterComponent from "../Components/Footer/Footer";
import HeaderComponent from "../Components/Header/HeaderComponent";
import HomeContainer from "../Container/Home/HomeContainer";
import ContactContainer from "../Container/Contact/ContactContainer";
import DetailsContainer from "../Container/Details/DetailsContainer";
import MoviesContainer from "../Container/Movies/MoviesContainer";
import TvSeriesContainer from "../Container/TvSeries/TvSeriesContainer";
import SearchContainer from "../Container/Search/SearchContainer";
import AboutContainer from "../Container/About/AboutContainer";
import LogIn from "../Container/login/LogIn";
// import MyBooking from "../Container/MyBooking";
// import BookSlot from "../Container/BookSlot";

const RouteComponent = () => {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeContainer />} />
          <Route path="/about" element={<AboutContainer />} />
          <Route path="/movies" element={<MoviesContainer />} />
          <Route path="/series" element={<TvSeriesContainer />} />
          <Route path="/search" element={<SearchContainer />} />
          <Route path="/contact" element={<ContactContainer />} />
          {/* <Route path="/bookslot" element={<BookSlot />} /> */}
          <Route path="/login" component={LogIn} />
          <Route
            path="/details/:movieid/:mediatype"
            element={<DetailsContainer />}
          />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
};

export default RouteComponent;
