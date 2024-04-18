//package com.falguni.Multiplex_Seat_Booking_System._Backend.service;
//
//
//import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Halls;
//import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.HallsRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class HallsServiceImpl
//{
//    @Autowired
//    HallsRepo hallsRepo;
//
//    public String addBooking(Halls halls)
//    {
//        hallsRepo.save(halls);
//        return "Added";
//    }
//
//    public List<Halls> getAllBookings()
//    {
//        return hallsRepo.findAll();
//    }
//
//    public Halls getByBookingId(Long hallsId)
//    {
//        Optional<Halls> findById = hallsRepo.findById(hallsId);
//        if(findById.isPresent())
//        {
//            return findById.get();
//        }
//        return null;
//    }
//
//    public String deleteById(Long hallsId)
//    {
//        if(hallsRepo.existsById(hallsId))
//        {
//            hallsRepo.deleteById(hallsId);
//            return "Deleted Successfully";
//        }
//        else
//        {
//            return "No Record Found";
//        }
//
//    }
//}
