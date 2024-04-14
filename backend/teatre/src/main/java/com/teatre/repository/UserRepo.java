package com.teatre.repository;

import com.teatre.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Long> {
User findByEmail(String username);
}
