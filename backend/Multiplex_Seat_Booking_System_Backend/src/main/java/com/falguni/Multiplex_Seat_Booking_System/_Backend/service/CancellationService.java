package com.falguni.Multiplex_Seat_Booking_System._Backend.service;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Booking;
import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.BookingDetails;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.BookingDetailsRepo;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.BookingRepo;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;

@Service
public class CancellationService {


    @Autowired
    private BookingDetailsRepo bookingDetailsRepo;

    @Autowired
    private BookingRepo bookingRepo;

//        public static LocalDateTime getShowDateTime(LocalDate showDate, LocalTime showTime) {
//            return LocalDateTime.of(showDate, showTime);
//        }
    @Transactional
    public String cancelBooking(Long bookingId) {
        Optional<Booking> bookingOptional = bookingRepo.findById(bookingId);
        if (bookingOptional.isPresent()) {
            Booking booking = bookingOptional.get();
            LocalDateTime cancelTime = LocalDateTime.now();
            LocalDateTime bookingDateTime = LocalDateTime.of(booking.getBookingDate().toLocalDate(), booking.getBookingTime().toLocalTime());
            long hoursDifference = Duration.between(cancelTime, bookingDateTime).toHours();
            System.out.println("Time diff: "+hoursDifference);
            if (hoursDifference > 48) {
                booking.setStatus("cancelled");
//                bookingDetailsRepo.deleteAllByBookingBookingId(bookingId);
                return "Booking cancelled successfully.";
            } else {
                return "Unable to cancel booking.Booking time and cancel time is less than 48 hours.";
            }
        } else {
            return "Booking not found.";
        }
    }

//    public List<BookingDetails> getBookingDetailsByBookingIdAndSeatTypeId(Long bookingId, String seatTypeId) {
//        return cancellationRepo.findByBooking_BookingIdAndSeatType_SeatTypeId(bookingId, seatTypeId);
//    }

    public Float getSumOfFaresByBookingId(Long bookingId) {
        List<BookingDetails> bookingDetailsList = bookingDetailsRepo.findAllByBookingBookingId(bookingId);
        return bookingDetailsList.stream()
                .map(details -> details.getSeatType().getSeatFare())
                .reduce(0f, Float::sum);
    }
}