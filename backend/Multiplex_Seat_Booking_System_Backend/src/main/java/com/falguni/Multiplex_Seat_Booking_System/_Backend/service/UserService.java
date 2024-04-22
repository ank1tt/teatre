package com.falguni.Multiplex_Seat_Booking_System._Backend.service;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Booking;
import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.User;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.BookingRepo;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class UserService {

    private BookingRepo bookingRepo;

    private UserRepo userRepository;
    // private  PasswordEncoder passwordEncoder;


    public UserService(UserRepo userRepository, BookingRepo bookingRepo){
        this.userRepository = userRepository;
        this.bookingRepo = bookingRepo;
        // this.passwordEncoder = passwordEncoder;
    }

    public ResponseEntity<String> registerUser(User user){
        if(userRepository.findByEmail(user.getEmail()) != null){
            return ResponseEntity.badRequest().body("User already registered. Please Login.");
        }
        //hashing the user Password.
        user.setPassword(user.getPassword());

        //setting the email
        user.setEmail(user.getEmail());

        //setting the username
        user.setUserName(user.getUserName());

        // setting the mobile no
        user.setMobileNo(user.getMobileNo());

        // setting the user type
        user.setUserType(user.getUserType());

        userRepository.save(user);
        String response = "User Registered Successfully.";

        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    public ResponseEntity<String> loginUser(User user){

        User existingUser = userRepository.findByEmail(user.getEmail());

        if(existingUser == null){
            return ResponseEntity.badRequest().body("User not registered. Please Register.");
        }

        if(existingUser.getPassword().equals(user.getPassword())){
            return ResponseEntity.ok("Login Successful");
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials. Please try Again.");
        }
    }

    public ResponseEntity<User> getUser(String email){
        User existingUser = userRepository.findByEmail(email);

        if(existingUser == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.ok(existingUser);
    }



    public String cancelBooking(Long bookingId){
        Booking booking = bookingRepo.findById(bookingId).orElse(null);

        // Check if the booking exists
        if (booking == null) {
            return "Booking not found.";
        }

        // Get the current date and time
        LocalDateTime now = LocalDateTime.now();

        // Get the booking date and time
        LocalDateTime bookingDateTime = LocalDateTime.of(booking.getBookingDate().toLocalDate(), booking.getBookingTime().toLocalTime());

        // Check if the booking date and time is less than 24 hours from the current date and time
        if (bookingDateTime.isBefore(now.plusHours(24))) {
            return "Booking cannot be cancelled within 24 hours of the show.";
        }

        // Update the status of the Booking to "cancelled"
        booking.setStatus("cancelled");
        bookingRepo.save(booking);

        return "Cancelled successfully";
    }



}
