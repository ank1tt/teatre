package com.teatre.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.teatre.entity.MoviePoster;
//import com.teatre.entity.MoviePoster.MoviePoster;
import com.teatre.service.MoviePosterService;

@RestController
@RequestMapping("/moviePoster")
public class MoviePosterController {
    private final MoviePosterService moviePosterService;

    public MoviePosterController(MoviePosterService moviePosterService) {
        this.moviePosterService = moviePosterService;
    }

    @PostMapping("/create")
    public ResponseEntity<MoviePoster> createMoviePoster(@RequestBody MoviePoster moviePoster) {
        return ResponseEntity.ok(moviePosterService.createMoviePoster(moviePoster));
    }

    @GetMapping("/getAll")
    public ResponseEntity<List<MoviePoster>> getAllMoviePosters() {
        return ResponseEntity.ok(moviePosterService.getAllMoviePosters());
    }
}