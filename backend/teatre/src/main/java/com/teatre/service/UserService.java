package com.teatre.service;

import com.teatre.entity.User;
import com.teatre.repository.UserRepo;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private UserRepo userRepository;
   // private  PasswordEncoder passwordEncoder;


    public UserService(UserRepo userRepository){
        this.userRepository = userRepository;
       // this.passwordEncoder = passwordEncoder;
    }

  public ResponseEntity<String> registerUser(User user){
        if(userRepository.findByEmail(user.getEmail()) != null){
            return ResponseEntity.badRequest().body("User already registered. Please Login.");
        }
        //hashing the user Password.
        user.setPassword(user.getPassword());

        //setting the email
        user.setEmail(user.getEmail());

        //setting the username
       user.setUserName(user.getUserName());

       // setting the mobile no
      user.setMobileNo(user.getMobileNo());

      // setting the user type
      user.setUserType(user.getUserType());

      userRepository.save(user);
      String response = "User Registered Successfully.";

      return new ResponseEntity<>(response, HttpStatus.CREATED);
  }

  public ResponseEntity<String> loginUser(User user){

        User existingUser = userRepository.findByEmail(user.getEmail());

        if(existingUser == null){
            return ResponseEntity.badRequest().body("User not registered. Please Register.");
        }

        if(existingUser.getPassword().equals(user.getPassword())){
            return ResponseEntity.ok("Login Successful");
        }else{
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid Credentials. Please try Again.");
        }
  }

  public ResponseEntity<String> getUserType(String email){
        User existingUser = userRepository.findByEmail(email);

        if(existingUser == null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
        }
        return ResponseEntity.ok(existingUser.getUserType());
  }
}

