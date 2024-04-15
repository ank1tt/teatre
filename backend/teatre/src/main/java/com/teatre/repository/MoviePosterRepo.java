package com.teatre.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.teatre.entity.MoviePoster;

//import com.teatre.entity.Movieposter.MoviePoster;

@Repository
public interface MoviePosterRepo extends JpaRepository<MoviePoster, Long> {
}
