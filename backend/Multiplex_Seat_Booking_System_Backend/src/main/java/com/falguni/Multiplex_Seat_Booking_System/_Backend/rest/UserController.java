package com.falguni.Multiplex_Seat_Booking_System._Backend.rest;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.User;
import com.falguni.Multiplex_Seat_Booking_System._Backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000",allowedHeaders = "*")
public class UserController {
    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user){
        return userService.registerUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user){
        return userService.loginUser(user);
    }


    @GetMapping("/usertype")
    public ResponseEntity<User> getUserType(@RequestParam String email){
        ResponseEntity<User> response = userService.getUser(email);
        if (response.getStatusCode() == HttpStatus.OK) {
            User user = response.getBody();
            return ResponseEntity.ok(user);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/cancelBooking/{bookingId}")
    public String cancelBooking(@PathVariable Long bookingId) {
        return userService.cancelBooking(bookingId);
    }
}
