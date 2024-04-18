package com.falguni.Multiplex_Seat_Booking_System._Backend.service;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.*;
import com.falguni.Multiplex_Seat_Booking_System._Backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.awt.print.Book;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class HallCapacityServiceImpl
{
    @Autowired
    HallCapacityRepo hallCapacityRepo;
    @Autowired
    HallsRepo hallsRepo;
    @Autowired
    SeatTypeRepo seatTypeRepo;
    @Autowired
    BookingRepo bookingRepo;
    @Autowired
    UserRepo userRepo;
    @Autowired
    ShowsRepo showsRepo;
    @Autowired
    BookingDetailsRepo bookingDetailsRepo;

    public String addBooking(HallCapacity hallCapacity)
    {
        try
        {
            Halls hall = hallsRepo.findById(hallCapacity.getHall().getHallId())
                    .orElseThrow(()-> new IllegalArgumentException("Hall not found"));
            SeatType seatType = seatTypeRepo.findById(hallCapacity.getSeatType().getSeatTypeId())
                            .orElseThrow(()->new IllegalArgumentException("Seat Type not found"));
            hallCapacity.setSeatType(seatType);
            hallCapacity.setHall(hall);
            hallCapacityRepo.save(hallCapacity);
            return "Added";
        }
        catch(IllegalArgumentException e)
        {
            return "Hall capacity cannot be added" + e.getMessage();
        }
        catch(Exception e)
        {
            return "Hall capacity cannot be added" + e.getMessage();
        }

    }

    public List<HallCapacity> getAllBookings()
    {
        return hallCapacityRepo.findAll();
    }

    public HallCapacity getByBookingId(Long hallsId)
    {
        Optional<HallCapacity> findById = hallCapacityRepo.findById(hallsId);
        if(findById.isPresent())
        {
            return findById.get();
        }
        return null;
    }

    public String deleteById(Long hallsId)
    {
        if(hallCapacityRepo.existsById(hallsId))
        {
            hallCapacityRepo.deleteById(hallsId);
            return "Deleted Successfully";
        }
        else
        {
            return "No Record Found";
        }

    }

    public List<SeatType> findPremiumSeats(Long hallId)
    {
        List<SeatType> seatType = seatTypeRepo.findAllBySeatTypeDesc("P");
        List<SeatType> primiumSeatsList = new ArrayList<>();
        for(HallCapacity hallC: hallCapacityRepo.findAllByHallHallId(hallId) )
        {
            for(SeatType s :seatType)
            {
                if(s.getSeatTypeId().equals(hallC.getSeatType().getSeatTypeId()))
                {
                    primiumSeatsList.add(s);
                }
            }
        }
        return primiumSeatsList;
    }

    public List<SeatType> findExecutiveSeats(Long hallId)
    {
        List<SeatType> seatType = seatTypeRepo.findAllBySeatTypeDesc("E");
        List<SeatType> executiveSeatsList = new ArrayList<>();
        //List<HallCapacity> listOfBookings = hallCapacityRepo.findAllByHallId(hallId);
        for(HallCapacity hallC: hallCapacityRepo.findAllByHallHallId(hallId) )
        {
            for(SeatType s :seatType)
            {
                if(s.getSeatTypeId().equals(hallC.getSeatType().getSeatTypeId()))
                {
                    executiveSeatsList.add(s);
                }
            }
        }
        return executiveSeatsList;
    }

    public List<SeatType> findNormalSeats(Long hallId)
    {
        List<SeatType> seatType = seatTypeRepo.findAllBySeatTypeDesc("N");
        List<SeatType> normalSeatsList = new ArrayList<>();
        for(HallCapacity hallC: hallCapacityRepo.findAllByHallHallId(hallId) )
        {
            for(SeatType s :seatType)
            {
                if(s.getSeatTypeId().equals(hallC.getSeatType().getSeatTypeId()))
                {
                    normalSeatsList.add(s);
                }
            }
        }
        return normalSeatsList;
    }

    public String confirmBooking(Booking booking)
    {
        try
        {
            User user = userRepo.findById(booking.getUser().getUserId())
                    .orElseThrow(()-> new IllegalArgumentException("User not found"));
            Shows shows = showsRepo.findById(booking.getShows().getShowId())
                    .orElseThrow(()->new IllegalArgumentException("Show not found"));
            booking.setUser(user);
            booking.setShows(shows);
            bookingRepo.save(booking);
            return "Added";
        }
        catch(IllegalArgumentException e)
        {
            return "Booking cannot be added " + e.getMessage();
        }
        catch(Exception e)
        {
            return "Booking cannot be added " + e.getMessage();
        }

    }
    public Booking getBookingById(Long bookingId)
    {
        Optional<Booking> findById = bookingRepo.findById(bookingId);
        if(findById.isPresent())
        {
            return findById.get();
        }
        return null;
    }
    public String addBookingDetails(BookingDetails bookingDetails)
    {
        try
        {
            Booking booking = bookingRepo.findById(bookingDetails.getBooking().getBookingId())
                    .orElseThrow(()-> new IllegalArgumentException("Booking not found"));
            SeatType seatType = seatTypeRepo.findById(bookingDetails.getSeatType().getSeatTypeId())
                    .orElseThrow(()->new IllegalArgumentException("Seat not found"));
            bookingDetails.setBooking(booking);
            bookingDetails.setSeatType(seatType);
            bookingDetailsRepo.save(bookingDetails);
            return "Added";
        }
        catch(IllegalArgumentException e)
        {
            return "Booking cannot be added " + e.getMessage();
        }
        catch(Exception e)
        {
            return "Booking cannot be added " + e.getMessage();
        }

    }
    public List<Shows> getListOfShows(Long movieId)
    {
        return showsRepo.findAllByMoviesMovieId(movieId);
    }

    public Booking getLastBooking()
    {
        return bookingRepo.findLastBooking();
    }

    public List<String> getBookedSeats(Long showId)
    {
        List<String> result = new ArrayList<>();
        List<Booking> bookedStatus= bookingRepo.findAllByStatus("booked");
        System.out.println("booked status: "+bookedStatus.size());
        List<Booking> bookedShow = new ArrayList<>();
        List<BookingDetails> bookingDetailsList = new ArrayList<>();

        for(Booking b: bookedStatus)
        {
            if(b.getShows().getShowId().equals(showId))
            {
                System.out.println("Hello");
                bookingDetailsList.addAll(bookingDetailsRepo.findAllByBookingBookingId(b.getBookingId()));
            }
        }
        System.out.println("bookinfDetails:"+bookingDetailsList.size());
        for(BookingDetails bd : bookingDetailsList)
        {
            result.add(bd.getSeatType().getSeatTypeId());
        }
        return result;
    }

//    public List<Shows> getAllShows()
//    {
//        List<Shows> showsList = new HashSet<Shows>();
//    }
}
