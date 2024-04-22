package com.falguni.Multiplex_Seat_Booking_System._Backend.entity;


import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name="bookingdetails")
public class BookingDetails
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long bookingDetailsId;
    @ManyToOne(cascade={CascadeType.REMOVE},fetch=FetchType.EAGER)
    @JoinColumn(name = "BookingId" , referencedColumnName = "BookingId")
    private Booking booking;
    @ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
    @JoinColumn(name = "SeatTypeId" , referencedColumnName = "SeatTypeId")
    private SeatType seatType;
    private Integer noOfSeats;
}

