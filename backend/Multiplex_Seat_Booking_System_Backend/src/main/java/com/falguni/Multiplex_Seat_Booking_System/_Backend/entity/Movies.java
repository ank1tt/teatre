package com.falguni.Multiplex_Seat_Booking_System._Backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Movies {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "movieId")
    private Long movieId;

    @Column(name = "MovieName" , length = 50)
    private String movieName;

    private String img;

}
