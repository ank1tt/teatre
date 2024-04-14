package com.teatre.repository;

import com.teatre.entity.Shows;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShowsRepo extends JpaRepository<Shows, Long> {

}
