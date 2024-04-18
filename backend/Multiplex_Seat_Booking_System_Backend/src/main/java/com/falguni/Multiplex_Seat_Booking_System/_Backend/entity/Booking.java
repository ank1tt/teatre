package com.falguni.Multiplex_Seat_Booking_System._Backend.entity;//package com.microserviceslumen.multiplexseatbookingbackend.model1;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Time;
import java.sql.Date;
import java.util.List;

@Entity
@Data
public class Booking {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long bookingId;

    @ManyToOne(cascade=CascadeType.REMOVE,fetch=FetchType.EAGER)
    @JoinColumn(name = "showId" ,  referencedColumnName = "ShowId")
    private Shows shows;

    @ManyToOne(cascade=CascadeType.ALL,fetch=FetchType.EAGER)
    @JoinColumn(name = "userId" , referencedColumnName = "userId")
    private User user;

    private Date bookingDate;
    private Time bookingTime;
    private String status;

//    @OneToMany(mappedBy = "booking", cascade = CascadeType.ALL)
//    private List<BookingDetails> bookingDetails;
//
//    public List<BookingDetails> getBookingDetails() {
//        return bookingDetails;
//    }
//
//    public void setBookingDetails(List<BookingDetails> bookingDetails) {
//        this.bookingDetails = bookingDetails;
//    }
}
