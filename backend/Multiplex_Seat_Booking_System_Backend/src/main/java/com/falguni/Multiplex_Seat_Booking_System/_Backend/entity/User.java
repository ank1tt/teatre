package com.falguni.Multiplex_Seat_Booking_System._Backend.entity;//package com.microserviceslumen.multiplexseatbookingbackend.model1;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Users")
@Data
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(name = "Username", length = 50)
    private String userName;

    @Column(name =  "Usertype", length = 50)
    private String userType;

    @Column(name = "Mobile No", length = 15)
    private String mobileNo;

    @Column(name = "Email" , length = 255)
    private String email;

    @Column(name = "Password", length = 50)
    private String password;
}
