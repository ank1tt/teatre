package com.falguni.Multiplex_Seat_Booking_System._Backend.rest;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Movies;
import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.User;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.MoviesRepo;
import com.falguni.Multiplex_Seat_Booking_System._Backend.service.LandingPageService;
import com.falguni.Multiplex_Seat_Booking_System._Backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/movies")
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
public class LandingPageController
{
    @Autowired
    LandingPageService landingPageService;

    @GetMapping("/getallmovies")
    public ResponseEntity<List<Movies>> getAllMovies()
    {
        List<Movies> movies= landingPageService.getAllMovies();
        return new ResponseEntity<>(movies, HttpStatus.OK);
    }
}
