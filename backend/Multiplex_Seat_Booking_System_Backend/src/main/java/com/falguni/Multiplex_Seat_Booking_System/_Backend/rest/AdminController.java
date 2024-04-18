package com.falguni.Multiplex_Seat_Booking_System._Backend.rest;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.*;
import com.falguni.Multiplex_Seat_Booking_System._Backend.service.AdminService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
public class AdminController {

    private AdminService adminService;

    public AdminController(AdminService adminService){
        this.adminService = adminService;
    }
    @PostMapping("/publish-movie")
    public ResponseEntity<String> publishMovie(@RequestBody Movies movies){
        // System.out.println("Request payload: " + movies);
        Movies publishedMovie = adminService.publishMovie(movies);
        return ResponseEntity.ok("Movie Published successfully with ID: " + publishedMovie.getMovieId());
    }

    @PostMapping("/publish-show")
    public ResponseEntity<String> publishShow(@RequestBody Shows shows){
        try {
            Shows publishedShows = adminService.publishShow(shows);
            return ResponseEntity.ok("Show Published successfully with ID: " + publishedShows.getShowId());
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        }
    }
    @GetMapping("/get-all-movies")
    public ResponseEntity<List<Movies>> getllMovies(){
        return ResponseEntity.ok(adminService.getAllMovies());
    }

    @PostMapping("/generate-revenue")
    public ResponseEntity<Double> calculateRevenue(
            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
        double revenue = adminService.calculateRevenue(startDate, endDate);
        return ResponseEntity.ok(revenue);
    }
    @GetMapping("/get-all-shows")
    public ResponseEntity<List<Shows>> getAllShows(){
        return ResponseEntity.ok(adminService.getAllShows());
    }

    @DeleteMapping("/delete-show/{showId}")
    public HttpStatus deleteShow(@PathVariable Long showId) {
        adminService.deleteShow(showId);
        return HttpStatus.OK;
    }
    @PostMapping("/add-hall")
    public ResponseEntity<Halls> addHall(@RequestBody Halls hall) {
        Halls newHall = adminService.addHall(hall);
        return new ResponseEntity<>(newHall, HttpStatus.CREATED);
    }

    @PostMapping("/add-seat-type")
    public ResponseEntity<SeatType> addSeatType(@RequestBody SeatType seatType) {
        SeatType newSeatType = adminService.addseatType(seatType);
        return new ResponseEntity<>(newSeatType, HttpStatus.CREATED);
    }


    @PostMapping("/add-hall-capacity")
    public ResponseEntity<String> addBooking(@RequestBody HallCapacity hallCapacity)
    {
        String status=adminService.addBooking(hallCapacity);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }
}
