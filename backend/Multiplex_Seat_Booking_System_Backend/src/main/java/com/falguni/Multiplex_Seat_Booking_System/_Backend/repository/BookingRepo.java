package com.falguni.Multiplex_Seat_Booking_System._Backend.repository;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Booking;
import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.BookingDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface BookingRepo extends JpaRepository<Booking,Long>
{

    List<Booking> findAllByUserUserId(Long userId);

    @Query(value = "SELECT * FROM booking ORDER BY booking_id DESC LIMIT 1", nativeQuery = true)
    Booking findLastBooking();

    List<Booking> findAllByStatus(String status);

}
