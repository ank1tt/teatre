package com.teatre.controller;

import com.teatre.entity.Movies;
import com.teatre.entity.Shows;
import com.teatre.service.AdminService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdminController {

    private AdminService adminService;

    public AdminController(AdminService adminService){
        this.adminService = adminService;
    }
    @PostMapping("/publish-movie")
    public ResponseEntity<String> publishMovie(@RequestBody Movies movies){
       // System.out.println("Request payload: " + movies);
        Movies publishedMovie = adminService.publishMovie(movies);
        return ResponseEntity.ok("Movie Published successfully with ID: " + publishedMovie.getMovieId());
    }

    @PostMapping("/publish-show")
    public ResponseEntity<String> publishShow(@RequestBody Shows shows){
        try {
            Shows publishedShows = adminService.publishShow(shows);
            return ResponseEntity.ok("Show Published successfully with ID: " + publishedShows.getShowId());
        } catch (ResponseStatusException e) {
            return ResponseEntity.status(e.getStatusCode()).body(e.getReason());
        }
    }
    @GetMapping("/get-all-movies")
    public ResponseEntity<List<Movies>> getllMovies(){
        return ResponseEntity.ok(adminService.getAllMovies());
    }

//    @PostMapping("/generate-revenue")
//    public ResponseEntity<Double> calculateRevenue(
//            @RequestParam("startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
//            @RequestParam("endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {
//        double revenue = adminService.calculateRevenue(startDate, endDate);
//        return ResponseEntity.ok(revenue);
//    }
}
