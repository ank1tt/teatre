package com.teatre.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Halls{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long HallId;

    @Column(name =  "HallDesc" , length = 40)
    private String HallDesc;

}
