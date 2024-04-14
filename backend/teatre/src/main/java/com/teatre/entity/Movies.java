package com.teatre.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.List;

@Entity
@Data
public class Movies {
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
@Column(name = "movieId")
private Long MovieId;



private String movieTitle;

private String img;

}
