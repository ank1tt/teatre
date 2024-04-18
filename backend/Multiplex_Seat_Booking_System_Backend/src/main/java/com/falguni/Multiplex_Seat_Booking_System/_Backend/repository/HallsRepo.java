package com.falguni.Multiplex_Seat_Booking_System._Backend.repository;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.BookingDetails;
import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.Halls;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HallsRepo extends JpaRepository<Halls,Long>
{

}
