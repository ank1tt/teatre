package com.teatre;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TeatreApplication {

	public static void main(String[] args) {

		SpringApplication.run(TeatreApplication.class, args);
		System.out.print("Hello this is Spring boot");
	}

}
