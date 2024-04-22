package com.falguni.Multiplex_Seat_Booking_System._Backend.service;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Movies;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.MoviesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LandingPageService
{
    @Autowired
    MoviesRepo moviesRepo;
    public List<Movies> getAllMovies()
    {
        return moviesRepo.findAll();
    }
}
