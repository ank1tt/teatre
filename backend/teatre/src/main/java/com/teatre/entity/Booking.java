package com.teatre.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Time;
import java.time.LocalDate;

@Entity
@Data
public class Booking {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long BookingId;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "showId" ,  referencedColumnName = "ShowId")
    private Shows shows;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "userId" , referencedColumnName = "userId")
    private User user;



    private LocalDate BookingDate;

    private LocalDate ShowDate;
    private Time BookingTime;

}
