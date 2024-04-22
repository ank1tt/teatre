package com.falguni.Multiplex_Seat_Booking_System._Backend.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class HallCapacity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long hallCapacityId;

    @ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
    @JoinColumn(name = "HallId" , referencedColumnName = "hallId")
    private Halls hall;

    @ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
    @JoinColumn(name = "SeatTypeId" , referencedColumnName = "SeatTypeId")
    private SeatType seatType;

    private Integer premCount;
    private Integer exeCount;
    private Integer normCount;

}

