package com.falguni.Multiplex_Seat_Booking_System._Backend.entity;


import jakarta.persistence.*;
import lombok.Data;

import java.sql.Date;
import java.sql.Time;

@Entity
@Data
public class Shows {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long showId;

    @ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
    @JoinColumn(name = "HallId" , referencedColumnName = "hallId")
    private Halls hall;

    @ManyToOne(cascade=CascadeType.REMOVE,fetch=FetchType.EAGER)
    @JoinColumn(name = "MovieId", referencedColumnName = "movieId")
    private Movies movies;


//    @Column(name = "SlotNo", length = 10)
//    private Long slotNo;


    private Date showDate;
    private Time showTime;

}

