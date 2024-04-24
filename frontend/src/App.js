import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';
import './App.css';
import LogIn from './components/UserLogin';
import Register from './components/Register';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import BookSlot from './components/BookSlot';
import MyBookings from './components/MyBookings';
import BookingCancellation from './components/BookingCancellation';
import BookSeatsNew from './components/BookSeatsNew';
import Home from './components/landingpage/Home';
import NavigationBar from './components/landingpage/NavigationBar';
import AdminHome from './components/AdminHome';
import PublishMovie from './components/PublishMovie';
import PublishShow from './components/PublishShow';
import GenerateRevenue from './components/GenerateRevenue';
import MovieDetails from './components/landingpage/MovieDetails';
import DeleteShows from './components/DeleteShows';
import { UserProvider } from './components/UserContext';
import PublishHall from './components/PublishHall';
import PublishSeat from './components/PublishSeat';
import HallCapacity from './components/HallCapacity';
import PrivateComponent from './components/PrivateComponent';



function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavigationBar/> */}
        <UserProvider>
          <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home/:userId" element={<Home/>} />
          {/* <Route path = "*" element={<Navigate to = "/home" />} /> */}
          <Route path="*" element={<Home/>} />
          {/* <Route path="/bookseats" element={<BookSeats/>}></Route> */}
          <Route path=":userId/:movieId/:movieTitle/bookslot" element={<BookSlot/>} />
          <Route path="/:userId/bookings" element={<MyBookings/>} />
          <Route path="/:bookingId/cancelbooking" element={<BookingCancellation/>} />
          {/* <Route path=":userId/:showId/:selectedDate/:selectedTime/:hallId/bookseats" element={<BookSeatsNew/>} /> */}
          <Route path=":userId/:showId/:selectedDate/:selectedTime/:hallId/bookseats" element={
                      <PrivateComponent role="user">
                        <BookSeatsNew/>
                      </PrivateComponent>}
          />

          <Route path="/admin" element={
                    <PrivateComponent role="admin">
                      <AdminHome />
                    </PrivateComponent>
                  }/>

          <Route path="/publish-movie" element={
            <PrivateComponent role="admin">
              <PublishMovie />
            </PrivateComponent>

          }/>
          <Route path="/publish-show/:movieId" element={
          <PrivateComponent role="admin">
            <PublishShow />
          </PrivateComponent>
        }/>
        <Route path="/publish-seat" element={
          <PrivateComponent role="admin">
            <PublishSeat />
          </PrivateComponent>
        }/>
        <Route path="/publish-hall" element={
          <PrivateComponent role="admin">
            <PublishHall />
          </PrivateComponent>
        }/>
        <Route path="/publish-hall-capacity" element={
          <PrivateComponent role="admin">
            <HallCapacity />
          </PrivateComponent>
        }/>
        <Route path="/delete-shows" element={
          <PrivateComponent role="admin">
            <DeleteShows />
          </PrivateComponent>
        }/>
          <Route path="/generate-revenue" element={
            <PrivateComponent role="admin">
              <GenerateRevenue/>
            </PrivateComponent>
          }/>
          {/* <Route path='/admin' element={<AdminHome />} /> */}
         {/* <Route path='/publish-movie' element={<PublishMovie />} /> */}
         {/* <Route path="/publish-show/:movieId" element={<PublishShow />} /> */}
         {/* <Route path="/generate-revenue" element={<GenerateRevenue />} />  */}
         {/* <Route path="/delete-shows" element={<DeleteShows />} /> */}
           


          <Route path="/:userId/home" element={<Home/>} />
          <Route path="/:movieId/:movieTitle/:img/bookslot" element={<BookSlot/>} />
          <Route path="/:userId/showId/bookings" element={<MyBookings/>} />
          <Route path="/:bookingId/cancelbooking" element={<BookingCancellation/>} />
        
        </Routes>

        </UserProvider>

      </div>
    </Router>
  );
}

export default App;