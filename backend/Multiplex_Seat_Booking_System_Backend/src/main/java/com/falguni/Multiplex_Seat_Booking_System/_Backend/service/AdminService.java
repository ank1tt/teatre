package com.falguni.Multiplex_Seat_Booking_System._Backend.service;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.*;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.*;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@Service
public class AdminService {

    private final MoviesRepo moviesRepo;
    private final ShowsRepo showsRepo;
    private final BookingRepo bookingRepo;
    private final BookingDetailsRepo bookingDetailsRepo;
    private final HallsRepo hallsRepo;
    private final SeatTypeRepo seatTypeRepo;
    private final HallCapacityRepo hallCapacityRepo;

    public AdminService(MoviesRepo moviesRepo, ShowsRepo showsRepo, BookingRepo bookingRepo, BookingDetailsRepo bookingDetailsRepo,HallsRepo hallsRepo,HallCapacityRepo hallCapacityRepo,SeatTypeRepo seatTypeRepo){
        this.moviesRepo = moviesRepo;
        this.showsRepo = showsRepo;
        this.bookingRepo = bookingRepo;
        this.bookingDetailsRepo = bookingDetailsRepo;
        this.hallsRepo = hallsRepo;
        this.hallCapacityRepo = hallCapacityRepo;
        this.seatTypeRepo = seatTypeRepo;
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


    public List<Movies> getAllMovies(){
        return moviesRepo.findAll();
    }

    public double calculateRevenue(LocalDate startDate, LocalDate endDate) {
        List<BookingDetails> bookingDetailsList = bookingDetailsRepo.findByBookingDateBetween(startDate, endDate);
        double totalRevenue = 0.0;

        for (BookingDetails bookingDetails : bookingDetailsList) {
            double fare = bookingDetails.getSeatType().getSeatFare();
            int noOfSeats = bookingDetails.getNoOfSeats();
            double totalFare = fare * noOfSeats;
            totalRevenue += totalFare;
        }
        return totalRevenue;
    }

    public List<Shows> getAllShows(){
        return showsRepo.findAll();
    }

    public void deleteShow(Long showId){
        if(!showsRepo.existsById(showId)){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Show with ID: " + showId + " does not exist.");
        }
        showsRepo.deleteByShowIdCustom(showId);
    }

    public Shows publishShow(Shows shows){
        if (shows.getMovies() == null || shows.getMovies().getMovieId() == null) {
            throw new IllegalArgumentException("The movie ID must not be null.");
        }
        Movies movie = moviesRepo.findById(shows.getMovies().getMovieId()).orElse(null);
        if (movie == null) {
            throw new IllegalArgumentException("The movie has not been published yet.");
        }
        shows.setMovies(movie);

        if (shows.getHall() == null || shows.getHall().getHallId() == null) {
            throw new IllegalArgumentException("The hall ID must not be null.");
        }
        Halls hall = hallsRepo.findById(shows.getHall().getHallId()).orElse(null);
        if (hall == null) {
            throw new IllegalArgumentException("The hall does not exist.");
        }
        shows.setHall(hall);
        return showsRepo.save(shows);
    }
    public Halls addHall(Halls halls){
        return hallsRepo.save(halls);
    }

    public SeatType addseatType(SeatType seatType){
        return seatTypeRepo.save(seatType);
    }

    public String addBooking(HallCapacity hallCapacity)
    {
        Halls hall = hallsRepo.findById(hallCapacity.getHall().getHallId()).orElse(null);
        if(hall == null){
            return "Hall not found";
        }
        SeatType seatType = seatTypeRepo.findById(hallCapacity.getSeatType().getSeatTypeId()).orElse(null);
        if(seatType == null){
            return "Seat Type not found";
        }
        HallCapacity newHallCapacity = new HallCapacity();
        newHallCapacity.setHall(hall);
        newHallCapacity.setSeatType(seatType);
        newHallCapacity.setPremCount(hallCapacity.getPremCount());
        newHallCapacity.setExeCount(hallCapacity.getExeCount());
        newHallCapacity.setNormCount(hallCapacity.getNormCount());
        hallCapacityRepo.save(newHallCapacity);
        return "Hall Capacity added successfully";
    }
}