package com.falguni.Multiplex_Seat_Booking_System._Backend.rest;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Booking;
import com.falguni.Multiplex_Seat_Booking_System._Backend.service.MyBookingsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user/mybookings")
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
public class MyBookingsRestController
{
    @Autowired
    MyBookingsServiceImpl myBookingsService;

    @GetMapping("/{userId}/bookings")
    public ResponseEntity<List<Booking>> getAllBookings(@PathVariable Long userId)
    {
        List<Booking> listOfBooking = myBookingsService.getAllBookingsById(userId);
        return new ResponseEntity<>(listOfBooking, HttpStatus.OK);
    }
    @DeleteMapping("/booking/{bookingId}")
    public ResponseEntity<String> deleteById(@PathVariable Long bookingId)
    {
        String status = myBookingsService.deleteById(bookingId);
        return new ResponseEntity<>(status,HttpStatus.OK);
    }
}

