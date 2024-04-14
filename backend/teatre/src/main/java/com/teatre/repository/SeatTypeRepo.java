package com.teatre.repository;

import com.teatre.entity.SeatType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SeatTypeRepo extends JpaRepository<SeatType, Long> {
}
