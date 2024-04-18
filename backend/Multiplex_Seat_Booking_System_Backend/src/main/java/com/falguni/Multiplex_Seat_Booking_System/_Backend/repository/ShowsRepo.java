package com.falguni.Multiplex_Seat_Booking_System._Backend.repository;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Shows;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ShowsRepo extends JpaRepository<Shows,Long> {
    List<Shows> findAllByMoviesMovieId(Long movieId);

    @Transactional
    @Modifying
    @Query("DELETE FROM Shows s WHERE s.showId = ?1")
    void deleteByShowIdCustom(Long showId);
}
