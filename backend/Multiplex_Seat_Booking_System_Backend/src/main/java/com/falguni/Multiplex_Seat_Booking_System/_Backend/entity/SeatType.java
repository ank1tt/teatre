package com.falguni.Multiplex_Seat_Booking_System._Backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class SeatType {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private String seatTypeId;

    @Column(name = "SeatTypeDesc" , length = 255)
    private String seatTypeDesc;

    private Float seatFare;
}

