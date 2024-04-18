//package com.falguni.Multiplex_Seat_Booking_System._Backend.service;
//
//
//import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.SeatType;
//import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.SeatTypeRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class SeatTypeServiceImpl
//{
//    @Autowired
//    SeatTypeRepo seatTypeRepo;
//
//    public String addBooking(SeatType seatType)
//    {
//        seatTypeRepo.save(seatType);
//        return "Added";
//    }
//
//    public List<SeatType> getAllBookings()
//    {
//        return seatTypeRepo.findAll();
//    }
//
//    public SeatType getByBookingId(String seatTypeId)
//    {
//        Optional<SeatType> findById = seatTypeRepo.findById(seatTypeId);
//        if(findById.isPresent())
//        {
//            return findById.get();
//        }
//        return null;
//    }
//
//    public String deleteById(String seatTypeId)
//    {
//        if(seatTypeRepo.existsById(seatTypeId))
//        {
//            seatTypeRepo.deleteById(seatTypeId);
//            return "Deleted Successfully";
//        }
//        else
//        {
//            return "No Record Found";
//        }
//
//    }
//
//    public List<SeatType> findPremiumSeats()
//    {
//        return seatTypeRepo.findAllBySeatTypeDesc("P");
//    }
//
//    public List<SeatType> findExecutiveSeats()
//    {
//        return seatTypeRepo.findAllBySeatTypeDesc("E");
//    }
//
//    public List<SeatType> findNormalSeats()
//    {
//        return seatTypeRepo.findAllBySeatTypeDesc("N");
//    }
//}
