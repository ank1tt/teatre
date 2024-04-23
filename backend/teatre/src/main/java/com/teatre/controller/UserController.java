package com.teatre.controller;

import com.teatre.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.teatre.entity.User;

@RestController
@RequestMapping("/user")
public class UserController {
    private UserService userService;

    public UserController(UserService userService){
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody User user){
       return userService.registerUser(user);
    }

    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody User user){
        return userService.loginUser(user);
    }

    @GetMapping("/usertype")
    public ResponseEntity<String> getUserType(@RequestParam String email){
        return userService.getUserType(email);
    }
}
