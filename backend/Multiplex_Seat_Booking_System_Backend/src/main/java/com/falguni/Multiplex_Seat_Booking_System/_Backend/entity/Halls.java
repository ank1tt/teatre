package com.falguni.Multiplex_Seat_Booking_System._Backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Halls {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long hallId;

    @Column(name =  "HallDesc" , length = 40)
    private String hallDesc;

}

