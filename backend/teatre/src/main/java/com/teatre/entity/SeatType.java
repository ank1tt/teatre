package com.teatre.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class SeatType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long SeatTypeId;

    @Column(name = "SeatTypeDesc" , length = 255)
    private String SeatTypeDesc;

    private Float SeatFare;
}
