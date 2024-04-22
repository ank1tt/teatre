package com.falguni.Multiplex_Seat_Booking_System._Backend.repository;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.SeatType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@EnableJpaRepositories
public interface SeatTypeRepo extends JpaRepository<SeatType,String>
{

    List<SeatType> findAllBySeatTypeDesc(String p);
//    List<SeatType> findAllBySeatFare(Long id);
}
