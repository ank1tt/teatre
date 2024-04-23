package com.teatre.service;

import com.teatre.entity.BookingDetails;
import com.teatre.entity.Movies;
import com.teatre.entity.Shows;
import com.teatre.repository.BookingDetailsRepo;
import com.teatre.repository.BookingRepo;
import com.teatre.repository.MoviesRepo;
import com.teatre.repository.ShowsRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;
import com.teatre.entity.SeatType;

@Service
public class AdminService {

    private final MoviesRepo moviesRepo;
    private final ShowsRepo showsRepo;
    private final BookingRepo bookingRepo;
    private final BookingDetailsRepo bookingDetailsRepo;

    public AdminService(MoviesRepo moviesRepo, ShowsRepo showsRepo, BookingRepo bookingRepo, BookingDetailsRepo bookingDetailsRepo){
        this.moviesRepo = moviesRepo;
        this.showsRepo = showsRepo;
        this.bookingRepo = bookingRepo;
        this.bookingDetailsRepo = bookingDetailsRepo;
    }

    public Movies publishMovie(Movies movies){
        System.out.println("Movies object before saving: " + movies);
       return moviesRepo.save(movies);
    }


//    public Shows publishShow(Shows shows){
//
////        if (shows.getMovies() == null || shows.getMovies().getMovieId() == null) {
////            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "The movie ID must not be null.");
////        }
//        Movies movies = moviesRepo.findById(shows.getMovies().getMovieId()).orElse(null);
//
//        if(movies == null){
//            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Movie has not been Published yet.");
//        }
//        return showsRepo.save(shows);
//    }


    public Shows publishShow(Shows shows){
        if (shows.getMovies() == null || shows.getMovies().getMovieId() == null) {
            throw new IllegalArgumentException("The movie ID must not be null.");
        }
        Movies movie = moviesRepo.findById(shows.getMovies().getMovieId()).orElse(null);
        if (movie == null) {
            throw new IllegalArgumentException("The movie has not been published yet.");
        }
        shows.setMovies(movie); // Set the managed movie entity
        return showsRepo.save(shows);
    }

    public List<Movies> getAllMovies(){
        return moviesRepo.findAll();
    }

//    public double calculateRevenue(LocalDate startDate, LocalDate endDate) {
//        List<BookingDetails> bookingDetailsList = bookingDetailsRepo.findByBookingDateBetween(startDate, endDate);
//        double totalRevenue = 0.0;
//
//        for (BookingDetails bookingDetails : bookingDetailsList) {
//            double fare = bookingDetails.getSeatTypeId().getSeatFare();
//            int noOfSeats = bookingDetails.getNoOfSeats();
//            double totalFare = fare * noOfSeats;
//            totalRevenue += totalFare;
//        }
//        return totalRevenue;
//    }
}
