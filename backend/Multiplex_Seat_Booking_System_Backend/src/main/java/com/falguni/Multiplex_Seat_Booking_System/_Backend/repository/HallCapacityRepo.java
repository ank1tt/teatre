package com.falguni.Multiplex_Seat_Booking_System._Backend.repository;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.HallCapacity;
import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.SeatType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HallCapacityRepo extends JpaRepository<HallCapacity,Long>
{


    List<HallCapacity> findAllByHallHallId(Long hallId);
}
