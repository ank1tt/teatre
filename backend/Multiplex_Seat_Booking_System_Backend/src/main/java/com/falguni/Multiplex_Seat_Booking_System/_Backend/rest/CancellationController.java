package com.falguni.Multiplex_Seat_Booking_System._Backend.rest;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Booking;
import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.BookingDetails;
import com.falguni.Multiplex_Seat_Booking_System._Backend.service.CancellationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

// In CancellationController.java

@RestController
@RequestMapping("/cancellation")
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
public class CancellationController {

    @Autowired
    private CancellationService cancellationService;



    @GetMapping("/{id}/fare")
    public ResponseEntity<Float> getSumOfFaresByBookingId(@PathVariable("id") Long bookingId) {
        Float totalFare = cancellationService.getSumOfFaresByBookingId(bookingId);
        if (totalFare == null) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(totalFare);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> cancelBooking(@PathVariable Long id) {
        String result = cancellationService.cancelBooking(id);
        if (result.equals("Booking cancelled successfully.")) {
            return ResponseEntity.ok(result);
        } else if (result.equals("Booking not found.")) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.status(400).body(result);
        }
    }


}
//    @GetMapping("/{bookingId}/refund")
//    public ResponseEntity<Double> getRefundAmount(@PathVariable Long bookingId) {
//        double refundAmount = cancellationService.calculateRefundAmount(bookingId);
//        return ResponseEntity.ok(refundAmount);
//    }
//
//    @DeleteMapping("/{bookingId}")
//    public ResponseEntity<Void> cancelBooking(@PathVariable Long bookingId) {
//        cancellationService.cancelBooking(bookingId);
//        return ResponseEntity.ok().build();
//    }
//}