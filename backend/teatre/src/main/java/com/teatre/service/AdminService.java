package com.teatre.service;

import com.teatre.entity.Movies;
import com.teatre.entity.Shows;
import com.teatre.repository.MoviesRepo;
import com.teatre.repository.ShowsRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class AdminService {

    private final MoviesRepo moviesRepo;
    private final ShowsRepo showsRepo;

    public AdminService(MoviesRepo moviesRepo, ShowsRepo showsRepo){
        this.moviesRepo = moviesRepo;
        this.showsRepo = showsRepo;
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


}
