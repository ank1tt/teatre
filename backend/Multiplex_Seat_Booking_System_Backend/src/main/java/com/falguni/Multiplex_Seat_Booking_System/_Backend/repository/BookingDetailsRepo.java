package com.falguni.Multiplex_Seat_Booking_System._Backend.repository;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Booking;
import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.BookingDetails;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

public interface BookingDetailsRepo extends JpaRepository<BookingDetails,Long> {
    @Query("SELECT bd FROM BookingDetails bd WHERE bd.booking.bookingDate BETWEEN :startDate AND :endDate")
    List<BookingDetails> findByBookingDateBetween(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);

    List<BookingDetails> findAllByBookingBookingId(Long bookingId);

    Optional<BookingDetails> findByBookingDetailsId(Long bookingDetailsId);

    void deleteAllByBookingBookingId(Long bookingId);

//    @Transactional
//    @Modifying
//    @Query("DELETE FROM BookingDetails bd WHERE bd.bookingId = :bookingId")
//    void deleteAllByBookingBookingId(@Param("bookingId") Long bookingId);
//    void deleteAllByBooking_IdAndBooking_BookingDateBefore(Long bookingId, LocalDateTime dateTime);

}
