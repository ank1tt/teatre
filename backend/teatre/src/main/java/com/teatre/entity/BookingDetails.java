package com.teatre.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class BookingDetails {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long BookingDetailsId;

    @ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
    @JoinColumn(name = "BookingId" , referencedColumnName = "BookingId")
    private Booking bookingId;


    @ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
    @JoinColumn(name = "SeatTypeId" , referencedColumnName = "SeatTypeId")
    private SeatType seatType;

    private Integer noOfSeats;

}
