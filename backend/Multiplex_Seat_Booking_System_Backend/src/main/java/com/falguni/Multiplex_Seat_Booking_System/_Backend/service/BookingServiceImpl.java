//package com.falguni.Multiplex_Seat_Booking_System._Backend.service;
//
//import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Booking;
//import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.BookingRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class BookingServiceImpl
//{
//    @Autowired
//    BookingRepo bookingRepo;
//
//    public String addBooking(Booking booking)
//    {
//        bookingRepo.save(booking);
//        return "Added";
//    }
//
//    public List<Booking> getAllBookings()
//    {
//        return bookingRepo.findAll();
//    }
//
//    public Booking getByBookingId(Long bookingId)
//    {
//        Optional<Booking> findById = bookingRepo.findById(bookingId);
//        if(findById.isPresent())
//        {
//            return findById.get();
//        }
//        return null;
//    }
//
//    public String deleteById(Long bookingId)
//    {
//        if(bookingRepo.existsById(bookingId))
//        {
//            bookingRepo.deleteById(bookingId);
//            return "Deleted Successfully";
//        }
//        else
//        {
//            return "No Record Found";
//        }
//
//    }
//}
