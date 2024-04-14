package com.teatre.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.sql.Time;
import java.time.LocalDate;
import java.sql.Date;
import java.sql.Time;

@Entity
@Data
public class Shows {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ShowId;

//    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//    @JoinColumn(name = "HallId" , referencedColumnName = "HallId")
//    private Halls hall;

    @ManyToOne( cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "movieId", referencedColumnName = "movieId")
    private Movies movies;

    private Time showTime;

    private Date showDate;
}
