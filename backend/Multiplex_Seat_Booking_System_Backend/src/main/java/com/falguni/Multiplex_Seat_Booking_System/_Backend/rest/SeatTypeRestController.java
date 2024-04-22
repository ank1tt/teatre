//package com.falguni.Multiplex_Seat_Booking_System._Backend.rest;
//
//import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.SeatType;
//import com.falguni.Multiplex_Seat_Booking_System._Backend.service.SeatTypeServiceImpl;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/seatbooking")
//@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
//public class SeatTypeRestController
//{
//    @Autowired
//    SeatTypeServiceImpl seatTypeService;
//    @PostMapping("/booking")
//    public ResponseEntity<String> addBooking(@RequestBody SeatType seatType)
//    {
//        String status=seatTypeService.addBooking(seatType);
//        return new ResponseEntity<>(status, HttpStatus.CREATED);
//    }
//
//    @GetMapping("/bookings")
//    public ResponseEntity<List<SeatType>> getAllBookings()
//    {
//        List<SeatType> listOfBookings = seatTypeService.getAllBookings();
//        return new ResponseEntity<>(listOfBookings,HttpStatus.OK);
//    }
//
//    @GetMapping("/booking/{seatTypeId}")
//    public ResponseEntity<SeatType> getByBookingId(@PathVariable String seatTypeId)
//    {
//        SeatType seatType = seatTypeService.getByBookingId(seatTypeId);
//        return new ResponseEntity<>(seatType,HttpStatus.OK);
//    }
//
//    @PutMapping("/booking")
//    public ResponseEntity<String> updateById(@RequestBody SeatType seatType)
//    {
//        String status=seatTypeService.addBooking(seatType);
//        return new ResponseEntity<>(status, HttpStatus.CREATED);
//    }
//
//    @DeleteMapping("/booking/{seatTypeId}")
//    public ResponseEntity<String> deleteById(@PathVariable String seatTypeId)
//    {
//        String status = seatTypeService.deleteById(seatTypeId);
//        return new ResponseEntity<>(status,HttpStatus.OK);
//    }
//
//    @GetMapping("/getpremiumseats")
//    public ResponseEntity<List<SeatType>> getPrimiumSeats()
//    {
//        List<SeatType> listOfPremiumSeats = seatTypeService.findPremiumSeats();
//        return new ResponseEntity<>(listOfPremiumSeats,HttpStatus.OK);
//    }
//
//    @GetMapping("/getexecutiveseats")
//    public ResponseEntity<List<SeatType>> getExecutiveSeats()
//    {
//        List<SeatType> listOfExecutiveSeats = seatTypeService.findExecutiveSeats();
//        return new ResponseEntity<>(listOfExecutiveSeats,HttpStatus.OK);
//    }
//
//    @GetMapping("/getnormalseats")
//    public ResponseEntity<List<SeatType>> getNormalSeats()
//    {
//        List<SeatType> listOfNormalSeats = seatTypeService.findNormalSeats();
//        return new ResponseEntity<>(listOfNormalSeats,HttpStatus.OK);
//    }
//}
