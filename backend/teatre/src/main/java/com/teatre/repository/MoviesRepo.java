package com.teatre.repository;

import com.teatre.entity.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MoviesRepo extends JpaRepository<Movies, Long> {

}
