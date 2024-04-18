//package com.falguni.Multiplex_Seat_Booking_System._Backend.rest;
//
//
//import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Booking;
//import com.falguni.Multiplex_Seat_Booking_System._Backend.service.BookingServiceImpl;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/user")
//@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
//public class MyBookingRestController
//{
//    @Autowired
//    BookingServiceImpl bookingService;
//    @PostMapping("/booking")
//    public ResponseEntity<String> addBooking(@RequestBody Booking myBooking)
//    {
//        String status=bookingService.addBooking(myBooking);
//        return new ResponseEntity<>(status, HttpStatus.CREATED);
//    }
//
//    @GetMapping("/bookings")
//    public ResponseEntity<List<Booking>> getAllBookings()
//    {
//        List<Booking> listOfBookings = bookingService.getAllBookings();
//        return new ResponseEntity<>(listOfBookings,HttpStatus.OK);
//    }
//
//    @GetMapping("/booking/{bookingId}")
//    public ResponseEntity<Booking> getByBookingId(@PathVariable Long bookingId)
//    {
//        Booking myBooking = bookingService.getByBookingId(bookingId);
//        return new ResponseEntity<>(myBooking,HttpStatus.OK);
//    }
//
//    @PutMapping("/booking")
//    public ResponseEntity<String> updateById(@RequestBody Booking myBooking)
//    {
//        String status=bookingService.addBooking(myBooking);
//        return new ResponseEntity<>(status, HttpStatus.CREATED);
//    }
//
//    @DeleteMapping("/booking/{bookingId}")
//    public ResponseEntity<String> deleteById(@PathVariable Long bookingId)
//    {
//        String status = bookingService.deleteById(bookingId);
//        return new ResponseEntity<>(status,HttpStatus.OK);
//    }
//}
