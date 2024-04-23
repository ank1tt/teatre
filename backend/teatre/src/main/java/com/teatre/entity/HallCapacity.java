package com.teatre.entity;

import jakarta.persistence.*;
import lombok.Data;
import com.teatre.entity.SeatType;
import com.teatre.entity.Halls;



@Entity
@Data
public class HallCapacity {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long hallCapacityId;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "SeatTypeId" , referencedColumnName = "SeatTypeId")
    private SeatType seatType;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name = "HallId" , referencedColumnName = "HallId")
    private Halls hall;

    private Integer premCount;
    private Integer exeCount;
    private Integer normCount;


}
