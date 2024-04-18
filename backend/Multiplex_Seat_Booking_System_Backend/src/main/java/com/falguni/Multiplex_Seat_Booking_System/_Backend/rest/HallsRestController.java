package com.falguni.Multiplex_Seat_Booking_System._Backend.rest;


import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.*;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.HallsRepo;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.SeatTypeRepo;
import com.falguni.Multiplex_Seat_Booking_System._Backend.service.HallCapacityServiceImpl;
//import com.falguni.Multiplex_Seat_Booking_System._Backend.service.HallsServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/hallbooking")
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
public class HallsRestController
{
    @Autowired
    HallsRepo hallsRepo;
    @Autowired
    SeatTypeRepo seatTypeRepo;
//    @Autowired
//    HallsServiceImpl hallsService;
//    @PostMapping("/booking")
//    public ResponseEntity<String> addBooking(@RequestBody Halls halls)
//    {
//        String status=hallsService.addBooking(halls);
//        return new ResponseEntity<>(status, HttpStatus.CREATED);
//    }
//
//    @GetMapping("/bookings")
//    public ResponseEntity<List<Halls>> getAllBookings()
//    {
//        List<Halls> listOfBookings = hallsService.getAllBookings();
//        return new ResponseEntity<>(listOfBookings,HttpStatus.OK);
//    }
//
//    @GetMapping("/booking/{seatTypeId}")
//    public ResponseEntity<Halls> getByBookingId(@PathVariable Long hallsId)
//    {
//        Halls seatType = hallsService.getByBookingId(hallsId);
//        return new ResponseEntity<>(seatType,HttpStatus.OK);
//    }
//
//    @PutMapping("/booking")
//    public ResponseEntity<String> updateById(@RequestBody Halls halls)
//    {
//        String status=hallsService.addBooking(halls);
//        return new ResponseEntity<>(status, HttpStatus.CREATED);
//    }
//
//    @DeleteMapping("/booking/{seatTypeId}")
//    public ResponseEntity<String> deleteById(@PathVariable Long hallsId)
//    {
//        String status = hallsService.deleteById(hallsId);
//        return new ResponseEntity<>(status,HttpStatus.OK);
//    }

    @Autowired
    HallCapacityServiceImpl hallsService;
    @PostMapping("/booking")
    public ResponseEntity<String> addBooking(@RequestBody HallCapacity hallCapacity)
    {
        String status=hallsService.addBooking(hallCapacity);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @GetMapping("/bookings")
    public ResponseEntity<List<HallCapacity>> getAllBookings()
    {
        List<HallCapacity> listOfBookings = hallsService.getAllBookings();
        return new ResponseEntity<>(listOfBookings,HttpStatus.OK);
    }

    @GetMapping("/booking/{seatTypeId}")
    public ResponseEntity<HallCapacity> getByBookingId(@PathVariable Long hallsId)
    {
        HallCapacity seatType = hallsService.getByBookingId(hallsId);
        return new ResponseEntity<>(seatType,HttpStatus.OK);
    }

    @PutMapping("/booking")
    public ResponseEntity<String> updateById(@RequestBody HallCapacity halls)
    {
        String status=hallsService.addBooking(halls);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }

    @DeleteMapping("/booking/{seatTypeId}")
    public ResponseEntity<String> deleteById(@PathVariable Long hallsId)
    {
        String status = hallsService.deleteById(hallsId);
        return new ResponseEntity<>(status,HttpStatus.OK);
    }

    @GetMapping("/{hallId}/getpremiumseats")
    public ResponseEntity<List<SeatType>> getPremiumSeats(@PathVariable Long hallId)
    {
        List<SeatType> listOfPremiumSeats = hallsService.findPremiumSeats(hallId);
        return new ResponseEntity<>(listOfPremiumSeats,HttpStatus.OK);
    }

    @GetMapping("/{hallId}/getexecutiveseats")
    public ResponseEntity<List<SeatType>> getExecutiveSeats(@PathVariable Long hallId)
    {
        List<SeatType> listOfExecutiveSeats = hallsService.findExecutiveSeats(hallId);
        return new ResponseEntity<>(listOfExecutiveSeats,HttpStatus.OK);
    }

    @GetMapping("/{hallId}/getnormalseats")
    public ResponseEntity<List<SeatType>> getNormalSeats(@PathVariable Long hallId)
    {
        List<SeatType> listOfNormalSeats = hallsService.findNormalSeats(hallId);
        return new ResponseEntity<>(listOfNormalSeats,HttpStatus.OK);
    }

    @PostMapping("/confirmbooking")
    public ResponseEntity<String> confirmBooking(@RequestBody Booking booking)
    {
        String status=hallsService.confirmBooking(booking);
        return new ResponseEntity<>(status, HttpStatus.CREATED);
    }
    @GetMapping("/confirmbooking/{bookingId}")
    public ResponseEntity<Booking> getBookingById(@PathVariable Long bookingId)
    {
        Booking booking= hallsService.getBookingById(bookingId);
        return new ResponseEntity<>(booking,HttpStatus.OK);
    }

    @GetMapping("/lastbookingid")
    public Long getLastBookingId() {
        return hallsService.getLastBooking().getBookingId();
    }

    @GetMapping("/{movieId}/getshowslist")
    public ResponseEntity<List<Shows>> getListOfShows(@PathVariable Long movieId)
    {
        List<Shows> listOfShows = hallsService.getListOfShows(movieId);
        return new ResponseEntity<>(listOfShows,HttpStatus.OK);
    }

    @PostMapping("/addbookingdetails")
    public ResponseEntity<String> addBookingDetails(@RequestBody BookingDetails bookingDetails)
    {
        String status = hallsService.addBookingDetails(bookingDetails);
        return new ResponseEntity<>(status,HttpStatus.OK);
    }

    @GetMapping("/getbookedseats/{showId}")
    public ResponseEntity<List<String>> getBookedSeats(@PathVariable Long showId)
    {
        List<String> listOfBookedSeats = hallsService.getBookedSeats(showId);
        return new ResponseEntity<>(listOfBookedSeats,HttpStatus.OK);
    }

//    @GetMapping("/shows")
//    public ResponseEntity<List<Shows>> getAllShows()
//    {
//        List<Shows> listOfBookings = hallsService.getAllShows();
//        return new ResponseEntity<>(listOfBookings,HttpStatus.OK);
//    }
}

