package com.falguni.Multiplex_Seat_Booking_System._Backend.service;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.*;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.BookingRepo;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.MoviesRepo;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.ShowsRepo;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MyBookingsServiceImpl {
    @Autowired
    BookingRepo bookingRepo;
    @Autowired
    UserRepo userRepo;
    @Autowired
    ShowsRepo showsRepo;
    @Autowired
    MoviesRepo moviesRepo;


    public List<Booking> getAllBookingsById(Long userId) {

//        User user = userRepo.findById(booking.getUser().getUserId())
//                .orElseThrow(() -> new IllegalArgumentException("User not found"));
//        Movies movie = moviesRepo.findById(booking.getShows().getMovies().getMovieId())
//                .orElseThrow(() -> new IllegalArgumentException("Movie not found"));
//        Shows show = showsRepo.findById(booking.getShows().getShowId())
//                .orElseThrow(() -> new IllegalArgumentException("Show not found"));
//        booking.setUser(user);
//        show.setMovies(movie);
//        booking.setShows(show);
        List<Booking> myBookings = bookingRepo.findAllByUserUserId(userId);
        //List<HallCapacity> listOfBookings = hallCapacityRepo.findAllByHallId(hallId);

        return myBookings;
    }

    public String deleteById(Long bookingId)
    {
        if(bookingRepo.existsById(bookingId))
        {
            bookingRepo.deleteById(bookingId);
            return "Deleted Successfully";
        }
        else
        {
            return "No Record Found";
        }
    }
}
