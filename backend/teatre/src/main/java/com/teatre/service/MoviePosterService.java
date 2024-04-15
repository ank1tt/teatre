package com.teatre.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.teatre.entity.MoviePoster;
//import com.teatre.entity.Movieposter.MoviePoster;
import com.teatre.repository.MoviePosterRepo;

@Service
public class MoviePosterService {
    private final MoviePosterRepo moviePosterRepository;

    @Autowired
    public MoviePosterService(MoviePosterRepo moviePosterRepository) {
        this.moviePosterRepository = moviePosterRepository;
    }

    public MoviePoster createMoviePoster(MoviePoster moviePoster) {
        return moviePosterRepository.save(moviePoster);
    }

    public List<MoviePoster> getAllMoviePosters() {
        return moviePosterRepository.findAll();
    }
}
