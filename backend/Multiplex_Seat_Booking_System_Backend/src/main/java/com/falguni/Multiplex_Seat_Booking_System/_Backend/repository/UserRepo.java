package com.falguni.Multiplex_Seat_Booking_System._Backend.repository;

import com.falguni.Multiplex_Seat_Booking_System._Backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User,Long>
{
    User findByEmail(String userName);
}
